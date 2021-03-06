// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Account entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Account entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Account", id.toString(), this);
  }

  static load(id: string): Account | null {
    return store.get("Account", id) as Account | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get packsOwned(): Array<string> | null {
    let value = this.get("packsOwned");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set packsOwned(value: Array<string> | null) {
    if (value === null) {
      this.unset("packsOwned");
    } else {
      this.set("packsOwned", Value.fromStringArray(value as Array<string>));
    }
  }

  get packsCreated(): Array<string> | null {
    let value = this.get("packsCreated");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set packsCreated(value: Array<string> | null) {
    if (value === null) {
      this.unset("packsCreated");
    } else {
      this.set("packsCreated", Value.fromStringArray(value as Array<string>));
    }
  }

  get rewardsCreated(): Array<string> | null {
    let value = this.get("rewardsCreated");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set rewardsCreated(value: Array<string> | null) {
    if (value === null) {
      this.unset("rewardsCreated");
    } else {
      this.set("rewardsCreated", Value.fromStringArray(value as Array<string>));
    }
  }

  get rewardsOwned(): Array<string> | null {
    let value = this.get("rewardsOwned");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set rewardsOwned(value: Array<string> | null) {
    if (value === null) {
      this.unset("rewardsOwned");
    } else {
      this.set("rewardsOwned", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class PackOwnership extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PackOwnership entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PackOwnership entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PackOwnership", id.toString(), this);
  }

  static load(id: string): PackOwnership | null {
    return store.get("PackOwnership", id) as PackOwnership | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get pack(): string {
    let value = this.get("pack");
    return value.toString();
  }

  set pack(value: string) {
    this.set("pack", Value.fromString(value));
  }
}

export class Pack extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Pack entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Pack entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Pack", id.toString(), this);
  }

  static load(id: string): Pack | null {
    return store.get("Pack", id) as Pack | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get packId(): BigInt {
    let value = this.get("packId");
    return value.toBigInt();
  }

  set packId(value: BigInt) {
    this.set("packId", Value.fromBigInt(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get owners(): Array<string> | null {
    let value = this.get("owners");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set owners(value: Array<string> | null) {
    if (value === null) {
      this.unset("owners");
    } else {
      this.set("owners", Value.fromStringArray(value as Array<string>));
    }
  }

  get rewards(): Array<string> | null {
    let value = this.get("rewards");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set rewards(value: Array<string> | null) {
    if (value === null) {
      this.unset("rewards");
    } else {
      this.set("rewards", Value.fromStringArray(value as Array<string>));
    }
  }

  get uri(): string | null {
    let value = this.get("uri");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uri(value: string | null) {
    if (value === null) {
      this.unset("uri");
    } else {
      this.set("uri", Value.fromString(value as string));
    }
  }

  get supply(): BigInt | null {
    let value = this.get("supply");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set supply(value: BigInt | null) {
    if (value === null) {
      this.unset("supply");
    } else {
      this.set("supply", Value.fromBigInt(value as BigInt));
    }
  }

  get totalSupply(): BigInt | null {
    let value = this.get("totalSupply");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set totalSupply(value: BigInt | null) {
    if (value === null) {
      this.unset("totalSupply");
    } else {
      this.set("totalSupply", Value.fromBigInt(value as BigInt));
    }
  }

  get openStartTimestamp(): BigInt | null {
    let value = this.get("openStartTimestamp");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set openStartTimestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("openStartTimestamp");
    } else {
      this.set("openStartTimestamp", Value.fromBigInt(value as BigInt));
    }
  }

  get rewardContract(): Bytes {
    let value = this.get("rewardContract");
    return value.toBytes();
  }

  set rewardContract(value: Bytes) {
    this.set("rewardContract", Value.fromBytes(value));
  }
}

export class PackReward extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PackReward entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PackReward entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PackReward", id.toString(), this);
  }

  static load(id: string): PackReward | null {
    return store.get("PackReward", id) as PackReward | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get uri(): string {
    let value = this.get("uri");
    return value.toString();
  }

  set uri(value: string) {
    this.set("uri", Value.fromString(value));
  }

  get supply(): BigInt {
    let value = this.get("supply");
    return value.toBigInt();
  }

  set supply(value: BigInt) {
    this.set("supply", Value.fromBigInt(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get pack(): string {
    let value = this.get("pack");
    return value.toString();
  }

  set pack(value: string) {
    this.set("pack", Value.fromString(value));
  }

  get reward(): string | null {
    let value = this.get("reward");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set reward(value: string | null) {
    if (value === null) {
      this.unset("reward");
    } else {
      this.set("reward", Value.fromString(value as string));
    }
  }
}

export class Reward extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Reward entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Reward entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Reward", id.toString(), this);
  }

  static load(id: string): Reward | null {
    return store.get("Reward", id) as Reward | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get owners(): Array<string> | null {
    let value = this.get("owners");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set owners(value: Array<string> | null) {
    if (value === null) {
      this.unset("owners");
    } else {
      this.set("owners", Value.fromStringArray(value as Array<string>));
    }
  }

  get uri(): string {
    let value = this.get("uri");
    return value.toString();
  }

  set uri(value: string) {
    this.set("uri", Value.fromString(value));
  }

  get supply(): BigInt {
    let value = this.get("supply");
    return value.toBigInt();
  }

  set supply(value: BigInt) {
    this.set("supply", Value.fromBigInt(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get underlyingToken(): string | null {
    let value = this.get("underlyingToken");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set underlyingToken(value: string | null) {
    if (value === null) {
      this.unset("underlyingToken");
    } else {
      this.set("underlyingToken", Value.fromString(value as string));
    }
  }

  get isRedeemable(): boolean {
    let value = this.get("isRedeemable");
    return value.toBoolean();
  }

  set isRedeemable(value: boolean) {
    this.set("isRedeemable", Value.fromBoolean(value));
  }
}

export class RewardOwnership extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save RewardOwnership entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RewardOwnership entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RewardOwnership", id.toString(), this);
  }

  static load(id: string): RewardOwnership | null {
    return store.get("RewardOwnership", id) as RewardOwnership | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get reward(): string {
    let value = this.get("reward");
    return value.toString();
  }

  set reward(value: string) {
    this.set("reward", Value.fromString(value));
  }
}

export class RewardUnderlyingToken extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save RewardUnderlyingToken entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RewardUnderlyingToken entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RewardUnderlyingToken", id.toString(), this);
  }

  static load(id: string): RewardUnderlyingToken | null {
    return store.get(
      "RewardUnderlyingToken",
      id
    ) as RewardUnderlyingToken | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    return value.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get reward(): string {
    let value = this.get("reward");
    return value.toString();
  }

  set reward(value: string) {
    this.set("reward", Value.fromString(value));
  }

  get erc20(): string | null {
    let value = this.get("erc20");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set erc20(value: string | null) {
    if (value === null) {
      this.unset("erc20");
    } else {
      this.set("erc20", Value.fromString(value as string));
    }
  }

  get erc721(): string | null {
    let value = this.get("erc721");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set erc721(value: string | null) {
    if (value === null) {
      this.unset("erc721");
    } else {
      this.set("erc721", Value.fromString(value as string));
    }
  }
}

export class RewardUnderlyingTokenERC20 extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save RewardUnderlyingTokenERC20 entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RewardUnderlyingTokenERC20 entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RewardUnderlyingTokenERC20", id.toString(), this);
  }

  static load(id: string): RewardUnderlyingTokenERC20 | null {
    return store.get(
      "RewardUnderlyingTokenERC20",
      id
    ) as RewardUnderlyingTokenERC20 | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get shares(): BigInt {
    let value = this.get("shares");
    return value.toBigInt();
  }

  set shares(value: BigInt) {
    this.set("shares", Value.fromBigInt(value));
  }

  get tokenContract(): Bytes {
    let value = this.get("tokenContract");
    return value.toBytes();
  }

  set tokenContract(value: Bytes) {
    this.set("tokenContract", Value.fromBytes(value));
  }

  get tokenAmount(): BigInt {
    let value = this.get("tokenAmount");
    return value.toBigInt();
  }

  set tokenAmount(value: BigInt) {
    this.set("tokenAmount", Value.fromBigInt(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (value === null) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(value as string));
    }
  }

  get decimals(): BigInt | null {
    let value = this.get("decimals");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set decimals(value: BigInt | null) {
    if (value === null) {
      this.unset("decimals");
    } else {
      this.set("decimals", Value.fromBigInt(value as BigInt));
    }
  }
}

export class RewardUnderlyingTokenERC721 extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save RewardUnderlyingTokenERC721 entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RewardUnderlyingTokenERC721 entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RewardUnderlyingTokenERC721", id.toString(), this);
  }

  static load(id: string): RewardUnderlyingTokenERC721 | null {
    return store.get(
      "RewardUnderlyingTokenERC721",
      id
    ) as RewardUnderlyingTokenERC721 | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenContract(): Bytes {
    let value = this.get("tokenContract");
    return value.toBytes();
  }

  set tokenContract(value: Bytes) {
    this.set("tokenContract", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (value === null) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(value as string));
    }
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (value === null) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(value as string));
    }
  }

  get uri(): string | null {
    let value = this.get("uri");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uri(value: string | null) {
    if (value === null) {
      this.unset("uri");
    } else {
      this.set("uri", Value.fromString(value as string));
    }
  }
}

export class TokenListing extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenListing entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenListing entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenListing", id.toString(), this);
  }

  static load(id: string): TokenListing | null {
    return store.get("TokenListing", id) as TokenListing | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get assetContract(): Bytes {
    let value = this.get("assetContract");
    return value.toBytes();
  }

  set assetContract(value: Bytes) {
    this.set("assetContract", Value.fromBytes(value));
  }

  get tokenId(): BigInt | null {
    let value = this.get("tokenId");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt | null) {
    if (value === null) {
      this.unset("tokenId");
    } else {
      this.set("tokenId", Value.fromBigInt(value as BigInt));
    }
  }

  get uri(): string | null {
    let value = this.get("uri");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uri(value: string | null) {
    if (value === null) {
      this.unset("uri");
    } else {
      this.set("uri", Value.fromString(value as string));
    }
  }

  get listings(): Array<string> {
    let value = this.get("listings");
    return value.toStringArray();
  }

  set listings(value: Array<string>) {
    this.set("listings", Value.fromStringArray(value));
  }
}

export class Listing extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Listing entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Listing entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Listing", id.toString(), this);
  }

  static load(id: string): Listing | null {
    return store.get("Listing", id) as Listing | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenListing(): string {
    let value = this.get("tokenListing");
    return value.toString();
  }

  set tokenListing(value: string) {
    this.set("tokenListing", Value.fromString(value));
  }

  get seller(): string {
    let value = this.get("seller");
    return value.toString();
  }

  set seller(value: string) {
    this.set("seller", Value.fromString(value));
  }

  get quantity(): BigInt {
    let value = this.get("quantity");
    return value.toBigInt();
  }

  set quantity(value: BigInt) {
    this.set("quantity", Value.fromBigInt(value));
  }

  get tokensPerBuyer(): BigInt {
    let value = this.get("tokensPerBuyer");
    return value.toBigInt();
  }

  set tokensPerBuyer(value: BigInt) {
    this.set("tokensPerBuyer", Value.fromBigInt(value));
  }

  get saleStartTimestamp(): BigInt | null {
    let value = this.get("saleStartTimestamp");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set saleStartTimestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("saleStartTimestamp");
    } else {
      this.set("saleStartTimestamp", Value.fromBigInt(value as BigInt));
    }
  }

  get saleEndTimestamp(): BigInt | null {
    let value = this.get("saleEndTimestamp");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set saleEndTimestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("saleEndTimestamp");
    } else {
      this.set("saleEndTimestamp", Value.fromBigInt(value as BigInt));
    }
  }

  get price(): BigInt {
    let value = this.get("price");
    return value.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get currency(): Bytes {
    let value = this.get("currency");
    return value.toBytes();
  }

  set currency(value: Bytes) {
    this.set("currency", Value.fromBytes(value));
  }

  get currencyName(): string | null {
    let value = this.get("currencyName");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set currencyName(value: string | null) {
    if (value === null) {
      this.unset("currencyName");
    } else {
      this.set("currencyName", Value.fromString(value as string));
    }
  }

  get currencySymbol(): string | null {
    let value = this.get("currencySymbol");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set currencySymbol(value: string | null) {
    if (value === null) {
      this.unset("currencySymbol");
    } else {
      this.set("currencySymbol", Value.fromString(value as string));
    }
  }

  get currencyDecimals(): BigInt | null {
    let value = this.get("currencyDecimals");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set currencyDecimals(value: BigInt | null) {
    if (value === null) {
      this.unset("currencyDecimals");
    } else {
      this.set("currencyDecimals", Value.fromBigInt(value as BigInt));
    }
  }

  get currencyPrice(): BigDecimal | null {
    let value = this.get("currencyPrice");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigDecimal();
    }
  }

  set currencyPrice(value: BigDecimal | null) {
    if (value === null) {
      this.unset("currencyPrice");
    } else {
      this.set("currencyPrice", Value.fromBigDecimal(value as BigDecimal));
    }
  }
}

export class Sale extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Sale entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Sale entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Sale", id.toString(), this);
  }

  static load(id: string): Sale | null {
    return store.get("Sale", id) as Sale | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }
}
