import { store, BigInt } from "@graphprotocol/graph-ts";
import {
  AccessNFTsCreated,
  TransferSingle,
  TransferBatch,
} from "../generated/AccessNFT/AccessNFT";

import {
  Account,
  RewardOwnership,
  Reward,
  RewardUnderlyingToken,
} from "../generated/schema";

const zeroAddress: string = "0x0000000000000000000000000000000000000000";

/**
 *
 * @param event AccessNFTsCreated(
        address indexed creator,
        uint256[] nftIds,
        string[] nftURIs,
        uint256[] acessNftIds,
        string[] accessNftURIs,
        uint256[] nftSupplies
    );
 */
export function handleAccessNFTsCreated(event: AccessNFTsCreated): void {
  // Update `Account` for creator
  let creatorAccountId: string = event.params.creator.toHexString();
  let creatorAccount = Account.load(creatorAccountId);

  if (creatorAccount == null) {
    creatorAccount = new Account(creatorAccountId);
    creatorAccount.save();
  }

  // Unredeemed rewards state
  let rewardIds = event.params.nftIds;
  let rewardURIs = event.params.nftURIs;

  // Redeemed rewards state
  let accessIds = event.params.acessNftIds;
  let accessURIs = event.params.accessNftURIs;

  let rewardSupplies = event.params.nftSupplies;
  let rewardContractAddress = event.address.toHexString();

  for (let i = 0; i < rewardIds.length; i++) {
    // Create `Reward` of unredeemed state
    let tokenId = rewardIds[i];
    let rewardId = rewardContractAddress + "-" + tokenId.toString();
    let reward = Reward.load(rewardId);
    if (reward == null) {
      reward = new Reward(rewardId);
    }

    reward.tokenId = rewardIds[i];
    reward.creator = creatorAccountId;
    reward.uri = rewardURIs[i];
    reward.supply = rewardSupplies[i];
    reward.totalSupply = rewardSupplies[i];
    reward.isRedeemable = true;

    reward.save();

    // Create `Reward` of redeemed state
    let accessTokenId = accessIds[i];
    let accessRewardId = rewardContractAddress + "-" + accessTokenId.toString();
    let accessReward = Reward.load(accessRewardId);
    if (accessReward == null) {
      reward = new Reward(accessRewardId);
    }

    reward.tokenId = accessIds[i];
    reward.creator = creatorAccountId;
    reward.uri = accessURIs[i];
    reward.supply = rewardSupplies[i];
    reward.totalSupply = rewardSupplies[i];
    reward.isRedeemable = false;

    reward.save();

    // Create `RewardUnderlyingToken`
    let rewardUnderlyingTokenId =
      rewardContractAddress + rewardId + "-underlying";
    let rewardUnderlyingToken = new RewardUnderlyingToken(
      rewardUnderlyingTokenId
    );

    rewardUnderlyingToken.type = "None";
    rewardUnderlyingToken.reward = rewardId;

    rewardUnderlyingToken.save();
  }
}

/**
 *
 * @param event TransferSingle(address operator, address from, address to, uint256 id, uint256 value)
 */
export function handleTransferSingle(event: TransferSingle): void {
  // Get `Reward` ID
  let rewardContractAddress = event.address.toHexString();
  let rewardId = rewardContractAddress + "-" + event.params.id.toString();

  // Create `Account` for receiver if it doesn't exist.
  let receiverAccountId = event.params.to.toHexString();
  let receiverAccount = Account.load(receiverAccountId);

  if (receiverAccount == null) {
    receiverAccount = new Account(receiverAccountId);
    receiverAccount.save();
  }

  if (event.params.from.toHexString() != zeroAddress) {
    // Update `RewardOwnership` for sender
    let senderOwnershipId = event.params.from.toHexString() + rewardId;
    let senderOwnership = RewardOwnership.load(senderOwnershipId);

    if (senderOwnership == null) {
      senderOwnership = new RewardOwnership(senderOwnershipId);

      senderOwnership.owner = event.params.from.toHexString();
      senderOwnership.reward = rewardId;
    }

    senderOwnership.balance = senderOwnership.balance.minus(event.params.value);

    if (senderOwnership.balance.equals(BigInt.fromI32(0))) {
      store.remove("RewardOwnership", senderOwnershipId);
    } else {
      senderOwnership.save();
    }
  }

  // Update `RewardOwnership` for receiver
  if (event.params.to.toHexString() == zeroAddress) {
    // Update `Reward` supply
    let reward = Reward.load(rewardId);
    reward.supply = reward.supply.minus(event.params.value);
    reward.save();
  } else {
    // Update `RewardOwnership` for receiver
    let receiverOwnershipId = event.params.to.toHexString() + rewardId;
    let receiverOwnership = RewardOwnership.load(receiverOwnershipId);

    if (receiverOwnership == null) {
      receiverOwnership = new RewardOwnership(receiverOwnershipId);

      receiverOwnership.owner = event.params.to.toHexString();
      receiverOwnership.balance = event.params.value;
      receiverOwnership.reward = rewardId;
    } else {
      receiverOwnership.balance = receiverOwnership.balance.plus(
        event.params.value
      );
    }

    if (receiverOwnership.balance.equals(BigInt.fromI32(0))) {
      store.remove("RewardOwnership", receiverOwnershipId);
    } else {
      receiverOwnership.save();
    }
  }
}

/**
 *
 * @param event TransferBatch(address operator, address from, address to, uint256[] ids, uint256[] values)
 */
export function handleTransferBatch(event: TransferBatch): void {
  let rewardIds = event.params.ids;
  let values = event.params.values;

  // Create `Account` for receiver if it doesn't exist.
  let receiverAccountId = event.params.to.toHexString();

  // not calling Account.load before save cuz mumbai having issues on 10/12
  let receiverAccount = new Account(receiverAccountId);
  receiverAccount.save();

  let rewardContractAddress = event.address.toHexString();
  for (let i = 0; i < rewardIds.length; i++) {
    // Get reward tokenId
    let rewardId = rewardContractAddress + "-" + rewardIds[i].toString();

    if (event.params.from.toHexString() != zeroAddress) {
      // Update `RewardOwnership` for sender
      let senderOwnershipId = event.params.from.toHexString() + rewardId;
      let senderOwnership = RewardOwnership.load(senderOwnershipId);

      if (senderOwnership == null) {
        senderOwnership = new RewardOwnership(senderOwnershipId);

        senderOwnership.owner = event.params.from.toHexString();
        senderOwnership.reward = rewardId;
      }

      senderOwnership.balance = senderOwnership.balance.minus(values[i]);

      if (senderOwnership.balance.equals(BigInt.fromI32(0))) {
        store.remove("RewardOwnership", senderOwnershipId);
      } else {
        senderOwnership.save();
      }
    }

    if (event.params.to.toHexString() == zeroAddress) {
      // Update `Pack` supply
      let reward = Reward.load(rewardId);
      reward.supply = reward.supply.minus(values[i]);
      reward.save();
    } else {
      // Update `PackOwnership` for receiver
      let receiverOwnershipId = event.params.to.toHexString() + rewardId;
      let receiverOwnership = RewardOwnership.load(receiverOwnershipId);

      if (receiverOwnership == null) {
        receiverOwnership = new RewardOwnership(receiverOwnershipId);

        receiverOwnership.owner = event.params.to.toHexString();
        receiverOwnership.balance = values[i];
        receiverOwnership.reward = rewardId;
      } else {
        receiverOwnership.balance = receiverOwnership.balance.plus(values[i]);
      }

      if (receiverOwnership.balance.equals(BigInt.fromI32(0))) {
        store.remove("RewardOwnership", receiverOwnershipId);
      } else {
        receiverOwnership.save();
      }
    }
  }
}
