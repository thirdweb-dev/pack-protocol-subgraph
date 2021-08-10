import { BigInt } from "@graphprotocol/graph-ts";

import {
  PackCreated,
  TransferSingle,
  TransferBatch
} from "../generated/Pack/Pack";

import { Account, Pack, PackOwnership } from "../generated/schema";

const zeroAddress: string = "0x0000000000000000000000000000000000000000"

/**
 * 
 * @param event PackCreated(address indexed rewardContract, address indexed creator, PackState packState, Rewards rewards)
 */
export function handlePackCreated(event: PackCreated): void {
  
  // Update `Account` for creator
  let creatorAccountId = event.params.creator.toHexString()
  let creatorAccount = Account.load(creatorAccountId)

  if(creatorAccount == null) {
    let creator = new Account(creatorAccountId)
    creator.save()
  }

  // Create `Pack`
  let packId = event.params.packState.packId.toString()
  let pack = new Pack(packId)

  pack.packId = event.params.packState.packId
  pack.creator = creatorAccountId
  pack.uri = event.params.packState.uri
  pack.supply = event.params.packState.currentSupply
  pack.openStartTimestamp = event.params.packState.openStart;
  pack.openEndTimestamp = event.params.packState.openEnd;
  pack.rewardContract = event.params.rewardContract;
  
  pack.save();
}

/**
 * 
 * @param event TransferSingle(address operator, address from, address to, uint256 id, uint256 value)
 */
export function handleTransferSingle(event: TransferSingle): void {
  
  // Get pack tokenId
  let packId = event.params.id.toString();
  
  if(event.params.from.toHexString() != zeroAddress) {
    // Update `PackOwnership` for sender
    let senderOwnershipId = event.params.from.toHexString() + packId
    let senderOwnership = PackOwnership.load(senderOwnershipId)

    if(senderOwnership == null) {
      senderOwnership = new PackOwnership(senderOwnershipId)

      senderOwnership.owner = event.params.from.toHexString()
      senderOwnership.pack = packId
    }

    senderOwnership.balance = (senderOwnership.balance).minus(event.params.value)

    senderOwnership.save()
  }

  // Update `PackOwnership` for receiver
  let receiverOwnershipId = event.params.to.toHexString() + packId
  let receiverOwnership = PackOwnership.load(receiverOwnershipId)

  if(receiverOwnership == null) {
    receiverOwnership = new PackOwnership(receiverOwnershipId)

    receiverOwnership.owner = event.params.to.toHexString()
    receiverOwnership.balance = event.params.value
    receiverOwnership.pack = packId
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

  let packIds = event.params.ids
  let values = event.params.values

  for(let i = 0; i < packIds.length; i++) {
    // Get pack tokenId
    let packId = packIds[i].toString()

    if(event.params.from.toHexString() != zeroAddress) {
      // Update `PackOwnership` for sender
      let senderOwnershipId = event.params.from.toHexString() + packId
      let senderOwnership = PackOwnership.load(senderOwnershipId)
  
      if(senderOwnership == null) {
        senderOwnership = new PackOwnership(senderOwnershipId)
  
        senderOwnership.owner = event.params.from.toHexString()
        senderOwnership.pack = packId
      }
  
      senderOwnership.balance = (senderOwnership.balance).minus(values[i])
  
      senderOwnership.save()
    }

    // Update `PackOwnership` for receiver
    let receiverOwnershipId = event.params.to.toHexString() + packId
    let receiverOwnership = PackOwnership.load(receiverOwnershipId)

    if(receiverOwnership == null) {
      receiverOwnership = new PackOwnership(receiverOwnershipId)

      receiverOwnership.owner = event.params.to.toHexString()
      receiverOwnership.balance = values[i]
      receiverOwnership.pack = packId
    } else {
      receiverOwnership.balance = (receiverOwnership.balance).plus(values[i])
    }

    receiverOwnership.save()
  }
}