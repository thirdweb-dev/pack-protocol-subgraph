import {
  NativeRewards,
} from "../generated/Reward/Reward"

import {
  Account, RewardOwnership, Reward, RewardUnderlyingToken
} from "../generated/schema"


const rewardContractAddress: string = "0xF0D1064ec8Dee772af45D6e9E45Cfa5F429d80a7"

/**
 * 
 * @param event NativeRewards(address indexed creator, uint[] rewardIds, string[] rewardURIs, uint[] rewardSupplies)
 */
export function handleNativeRewards(event: NativeRewards): void {

  // Update `Account` for creator
  let creatorAccountId: string = event.params.creator.toHex()
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
