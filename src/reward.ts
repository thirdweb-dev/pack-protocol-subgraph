import {
  NativeRewards,
  TransferSingle,
  TransferBatch
} from "../generated/Reward/Reward"

import {
  Account, RewardOwnership, Reward, RewardUnderlyingToken
} from "../generated/schema"


const rewardContractAddress: string = "0xF0D1064ec8Dee772af45D6e9E45Cfa5F429d80a7"
const zeroAddress: string = "0x0000000000000000000000000000000000000000"

/**
 * 
 * @param event NativeRewards(address indexed creator, uint[] rewardIds, string[] rewardURIs, uint[] rewardSupplies)
 */
export function handleNativeRewards(event: NativeRewards): void {

  // Update `Account` for creator
  let creatorAccountId: string = event.params.creator.toHexString()
  let creatorAccount = Account.load(creatorAccountId)

  if(creatorAccount == null) {
    creatorAccount = new Account(creatorAccountId)
    creatorAccount.save()
  }

  let rewardIds = event.params.rewardIds
  let rewardURIs = event.params.rewardURIs
  let rewardSupplies = event.params.rewardSupplies

  for(let i = 0; i < rewardIds.length; i++) {

    // Create `Reward`
    let rewardId = rewardIds[i].toString()
    let reward = new Reward(rewardId)

    reward.tokenId = rewardIds[i]
    reward.creator = creatorAccountId
    reward.uri = rewardURIs[i]
    reward.supply = rewardSupplies[i]

    reward.save()

    // Create `RewardUnderlyingToken`
    let rewardUnderlyingTokenId = rewardContractAddress + rewardId + '-underlying'
    let rewardUnderlyingToken = new RewardUnderlyingToken(rewardUnderlyingTokenId)

    rewardUnderlyingToken.type = "None"
    rewardUnderlyingToken.reward = rewardId

    rewardUnderlyingToken.save()

    // Create `RewardOwnership` for creator
    let rewardOwnershipId = creatorAccountId + rewardContractAddress + rewardId
    let rewardOwnership = new RewardOwnership(rewardOwnershipId)

    rewardOwnership.owner = creatorAccountId
    rewardOwnership.balance = rewardSupplies[i]
    rewardOwnership.reward = rewardId

    rewardOwnership.save()
  }
}

/**
 * 
 * @param event TransferSingle(address operator, address from, address to, uint256 id, uint256 value)
 */
 export function handleTransferSingle(event: TransferSingle): void {
  
  // Get reward tokenId
  let rewardId = event.params.id.toString();
  
  if(event.params.from.toHexString() != zeroAddress) {
    // Update `RewardOwnership` for sender
    let senderOwnershipId = event.params.from.toHexString() + rewardContractAddress + rewardId
    let senderOwnership = RewardOwnership.load(senderOwnershipId)

    if(senderOwnership == null) {
      senderOwnership = new RewardOwnership(senderOwnershipId)

      senderOwnership.owner = event.params.from.toHexString()
      senderOwnership.reward = rewardId
    }

    senderOwnership.balance = (senderOwnership.balance).minus(event.params.value)

    senderOwnership.save()
  }

  // Update `RewardOwnership` for receiver
  let receiverOwnershipId = event.params.to.toHexString() + rewardContractAddress + rewardId
  let receiverOwnership = RewardOwnership.load(receiverOwnershipId)

  if(receiverOwnership == null) {
    receiverOwnership = new RewardOwnership(receiverOwnershipId)

    receiverOwnership.owner = event.params.to.toHexString()
    receiverOwnership.balance = event.params.value
    receiverOwnership.reward = rewardId
  } else {
    receiverOwnership.balance = (receiverOwnership.balance).plus(event.params.value)
  }

  receiverOwnership.save()
}

/**
 * 
 * @param event TransferBatch(address operator, address from, address to, uint256[] ids, uint256[] values)
 */
export function handleTransferBatch(event: TransferBatch): void {

  let rewardIds = event.params.ids
  let values = event.params.values

  for(let i = 0; i < rewardIds.length; i++) {
    // Get reward tokenId
    let rewardId = rewardIds[i].toString()

    if(event.params.from.toHexString() != zeroAddress) {
      // Update `PackOwnership` for sender
      let senderOwnershipId = event.params.from.toHexString() + rewardContractAddress + rewardId
      let senderOwnership = RewardOwnership.load(senderOwnershipId)
  
      if(senderOwnership == null) {
        senderOwnership = new RewardOwnership(senderOwnershipId)
  
        senderOwnership.owner = event.params.from.toHexString()
        senderOwnership.reward = rewardId
      }
  
      senderOwnership.balance = (senderOwnership.balance).minus(values[i])
  
      senderOwnership.save()
    }

    // Update `PackOwnership` for receiver
    let receiverOwnershipId = event.params.to.toHexString() + rewardContractAddress + rewardId
    let receiverOwnership = RewardOwnership.load(receiverOwnershipId)

    if(receiverOwnership == null) {
      receiverOwnership = new RewardOwnership(receiverOwnershipId)

      receiverOwnership.owner = event.params.to.toHexString()
      receiverOwnership.balance = values[i]
      receiverOwnership.reward = rewardId
    } else {
      receiverOwnership.balance = (receiverOwnership.balance).plus(values[i])
    }

    receiverOwnership.save()
  }
}
