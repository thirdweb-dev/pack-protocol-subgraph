import {
  NativeRewards,
  TransferSingle,
  TransferBatch,
} from "../generated/Reward/Reward";

import {
  Account,
  RewardOwnership,
  Reward,
  RewardUnderlyingToken,
} from "../generated/schema";

const zeroAddress: string = "0x0000000000000000000000000000000000000000";

/**
 *
 * @param event NativeRewards(address indexed creator, uint[] rewardIds, string[] rewardURIs, uint[] rewardSupplies)
 */
export function handleNativeRewards(event: NativeRewards): void {
  // Update `Account` for creator
  let creatorAccountId: string = event.params.creator.toHexString();
  let creatorAccount = Account.load(creatorAccountId);

  if (creatorAccount == null) {
    creatorAccount = new Account(creatorAccountId);
    creatorAccount.save();
  }

  let rewardIds = event.params.rewardIds;
  let rewardURIs = event.params.rewardURIs;
  let rewardSupplies = event.params.rewardSupplies;
  let rewardContractAddress = event.address.toHexString();

  for (let i = 0; i < rewardIds.length; i++) {
    // Create `Reward`
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

    senderOwnership.save();
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

    receiverOwnership.save();
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
  let receiverAccount = Account.load(receiverAccountId);

  if (receiverAccount == null) {
    receiverAccount = new Account(receiverAccountId);
    receiverAccount.save();
  }

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

      senderOwnership.save();
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

      receiverOwnership.save();
    }
  }
}
