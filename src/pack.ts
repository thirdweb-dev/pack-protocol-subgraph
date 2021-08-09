import { BigInt } from "@graphprotocol/graph-ts";
import {
  Pack,
  ApprovalForAll,
  PackCreated,
  PackOpenFulfilled,
  PackOpenRequest,
  TransferBatch,
  TransferSingle,
  URI,
} from "../generated/Pack/Pack";
import { Account, PackEntity } from "../generated/schema";

export function handleApprovalForAll(event: ApprovalForAll): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = PackEntity.load(event.transaction.from.toHex());

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex());

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0);
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1);

  // Entity fields can be set based on event parameters
  entity.account = event.params.account;
  entity.operator = event.params.operator;

  // Entities can be written to the store with `.save()`
  entity.save();

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.balanceOf(...)
  // - contract.balanceOfBatch(...)
  // - contract.createPack(...)
  // - contract.creator(...)
  // - contract.getPack(...)
  // - contract.getPackWithRewards(...)
  // - contract.getRewardsInPack(...)
  // - contract.isApprovedForAll(...)
  // - contract.nextTokenId(...)
  // - contract.onERC1155BatchReceived(...)
  // - contract.onERC1155Received(...)
  // - contract.packs(...)
  // - contract.pendingRequests(...)
  // - contract.randomnessRequests(...)
  // - contract.rewards(...)
  // - contract.supportsInterface(...)
  // - contract.uri(...)
  // - contract.vrfFees(...)
  // - contract.vrfKeyHash(...)
}

export function handlePackCreated(event: PackCreated): void {
  let creatorId = event.params.creator.toHexString();
  let creator = new Account(creatorId);
  creator.save();

  let packId = event.params.packState.packId.toString();
  let entity = new PackEntity(packId);
  entity.packId = event.params.packState.packId;
  entity.owner = creator.id;
  entity.creator = creator.id;
  entity.uri = event.params.packState.uri;
  // TODO balance
  entity.supply = event.params.packState.currentSupply;
  entity.openStart = event.params.packState.openStart;
  entity.openEnd = event.params.packState.openEnd;
  entity.rewardContract = event.params.rewardContract;
  entity.save();
}

export function handlePackOpenFulfilled(event: PackOpenFulfilled): void {
  //emit PackOpenFulfilled(request.packId, request.opener, _requestId, rewardsInPack.source, rewardId);
}

export function handleTransferBatch(event: TransferBatch): void {}

export function handleTransferSingle(event: TransferSingle): void {
  let packId = event.params.id.toString();
  let entity = PackEntity.load(packId);
  // TODO conditional based off transfer amount
}
