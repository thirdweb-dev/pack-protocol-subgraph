// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AccessNFTRedeemed extends ethereum.Event {
  get params(): AccessNFTRedeemed__Params {
    return new AccessNFTRedeemed__Params(this);
  }
}

export class AccessNFTRedeemed__Params {
  _event: AccessNFTRedeemed;

  constructor(event: AccessNFTRedeemed) {
    this._event = event;
  }

  get redeemer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nftTokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get accessNftId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class AccessNFTsCreated extends ethereum.Event {
  get params(): AccessNFTsCreated__Params {
    return new AccessNFTsCreated__Params(this);
  }
}

export class AccessNFTsCreated__Params {
  _event: AccessNFTsCreated;

  constructor(event: AccessNFTsCreated) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nftIds(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get nftURIs(): Array<string> {
    return this._event.parameters[2].value.toStringArray();
  }

  get acessNftIds(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get accessNftURIs(): Array<string> {
    return this._event.parameters[4].value.toStringArray();
  }

  get nftSupplies(): Array<BigInt> {
    return this._event.parameters[5].value.toBigIntArray();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoyaltyUpdated extends ethereum.Event {
  get params(): RoyaltyUpdated__Params {
    return new RoyaltyUpdated__Params(this);
  }
}

export class RoyaltyUpdated__Params {
  _event: RoyaltyUpdated;

  constructor(event: RoyaltyUpdated) {
    this._event = event;
  }

  get royaltyBps(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class TransferBatch extends ethereum.Event {
  get params(): TransferBatch__Params {
    return new TransferBatch__Params(this);
  }
}

export class TransferBatch__Params {
  _event: TransferBatch;

  constructor(event: TransferBatch) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class TransferSingle extends ethereum.Event {
  get params(): TransferSingle__Params {
    return new TransferSingle__Params(this);
  }
}

export class TransferSingle__Params {
  _event: TransferSingle;

  constructor(event: TransferSingle) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class URI extends ethereum.Event {
  get params(): URI__Params {
    return new URI__Params(this);
  }
}

export class URI__Params {
  _event: URI;

  constructor(event: URI) {
    this._event = event;
  }

  get value(): string {
    return this._event.parameters[0].value.toString();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class AccessNFT__accessNftInfoResult {
  value0: Address;
  value1: string;
  value2: BigInt;

  constructor(value0: Address, value1: string, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class AccessNFT__nftInfoResult {
  value0: Address;
  value1: string;
  value2: BigInt;
  value3: BigInt;
  value4: i32;

  constructor(
    value0: Address,
    value1: string,
    value2: BigInt,
    value3: BigInt,
    value4: i32
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set(
      "value4",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value4))
    );
    return map;
  }
}

export class AccessNFT__royaltyInfoResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class AccessNFT extends ethereum.SmartContract {
  static bind(address: Address): AccessNFT {
    return new AccessNFT("AccessNFT", address);
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  MINTER_ROLE(): Bytes {
    let result = super.call("MINTER_ROLE", "MINTER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_MINTER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("MINTER_ROLE", "MINTER_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  PAUSER_ROLE(): Bytes {
    let result = super.call("PAUSER_ROLE", "PAUSER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_PAUSER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("PAUSER_ROLE", "PAUSER_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  _contractURI(): string {
    let result = super.call("_contractURI", "_contractURI():(string)", []);

    return result[0].toString();
  }

  try__contractURI(): ethereum.CallResult<string> {
    let result = super.tryCall("_contractURI", "_contractURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  accessNftInfo(param0: BigInt): AccessNFT__accessNftInfoResult {
    let result = super.call(
      "accessNftInfo",
      "accessNftInfo(uint256):(address,string,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new AccessNFT__accessNftInfoResult(
      result[0].toAddress(),
      result[1].toString(),
      result[2].toBigInt()
    );
  }

  try_accessNftInfo(
    param0: BigInt
  ): ethereum.CallResult<AccessNFT__accessNftInfoResult> {
    let result = super.tryCall(
      "accessNftInfo",
      "accessNftInfo(uint256):(address,string,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AccessNFT__accessNftInfoResult(
        value[0].toAddress(),
        value[1].toString(),
        value[2].toBigInt()
      )
    );
  }

  balanceOf(account: Address, id: BigInt): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address, id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfBatch(accounts: Array<Address>, ids: Array<BigInt>): Array<BigInt> {
    let result = super.call(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_balanceOfBatch(
    accounts: Array<Address>,
    ids: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  contractURI(): string {
    let result = super.call("contractURI", "contractURI():(string)", []);

    return result[0].toString();
  }

  try_contractURI(): ethereum.CallResult<string> {
    let result = super.tryCall("contractURI", "contractURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  createAccessNfts(
    _nftURIs: Array<string>,
    _accessNftURIs: Array<string>,
    _nftSupplies: Array<BigInt>
  ): Array<BigInt> {
    let result = super.call(
      "createAccessNfts",
      "createAccessNfts(string[],string[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromStringArray(_nftURIs),
        ethereum.Value.fromStringArray(_accessNftURIs),
        ethereum.Value.fromUnsignedBigIntArray(_nftSupplies)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_createAccessNfts(
    _nftURIs: Array<string>,
    _accessNftURIs: Array<string>,
    _nftSupplies: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "createAccessNfts",
      "createAccessNfts(string[],string[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromStringArray(_nftURIs),
        ethereum.Value.fromStringArray(_accessNftURIs),
        ethereum.Value.fromUnsignedBigIntArray(_nftSupplies)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getRoleMember(role: Bytes, index: BigInt): Address {
    let result = super.call(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toAddress();
  }

  try_getRoleMember(role: Bytes, index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoleMemberCount(role: Bytes): BigInt {
    let result = super.call(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );

    return result[0].toBigInt();
  }

  try_getRoleMemberCount(role: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isApprovedForAll(account: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    account: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isTrustedForwarder(forwarder: Address): boolean {
    let result = super.call(
      "isTrustedForwarder",
      "isTrustedForwarder(address):(bool)",
      [ethereum.Value.fromAddress(forwarder)]
    );

    return result[0].toBoolean();
  }

  try_isTrustedForwarder(forwarder: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isTrustedForwarder",
      "isTrustedForwarder(address):(bool)",
      [ethereum.Value.fromAddress(forwarder)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  nextTokenId(): BigInt {
    let result = super.call("nextTokenId", "nextTokenId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_nextTokenId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nextTokenId", "nextTokenId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nftInfo(param0: BigInt): AccessNFT__nftInfoResult {
    let result = super.call(
      "nftInfo",
      "nftInfo(uint256):(address,string,uint256,uint256,uint8)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new AccessNFT__nftInfoResult(
      result[0].toAddress(),
      result[1].toString(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toI32()
    );
  }

  try_nftInfo(param0: BigInt): ethereum.CallResult<AccessNFT__nftInfoResult> {
    let result = super.tryCall(
      "nftInfo",
      "nftInfo(uint256):(address,string,uint256,uint256,uint8)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AccessNFT__nftInfoResult(
        value[0].toAddress(),
        value[1].toString(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toI32()
      )
    );
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  royaltyBps(): BigInt {
    let result = super.call("royaltyBps", "royaltyBps():(uint256)", []);

    return result[0].toBigInt();
  }

  try_royaltyBps(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("royaltyBps", "royaltyBps():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  royaltyInfo(
    tokenId: BigInt,
    salePrice: BigInt
  ): AccessNFT__royaltyInfoResult {
    let result = super.call(
      "royaltyInfo",
      "royaltyInfo(uint256,uint256):(address,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromUnsignedBigInt(salePrice)
      ]
    );

    return new AccessNFT__royaltyInfoResult(
      result[0].toAddress(),
      result[1].toBigInt()
    );
  }

  try_royaltyInfo(
    tokenId: BigInt,
    salePrice: BigInt
  ): ethereum.CallResult<AccessNFT__royaltyInfoResult> {
    let result = super.tryCall(
      "royaltyInfo",
      "royaltyInfo(uint256,uint256):(address,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromUnsignedBigInt(salePrice)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AccessNFT__royaltyInfoResult(
        value[0].toAddress(),
        value[1].toBigInt()
      )
    );
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  tokenURI(_nftId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_nftId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(_nftId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_nftId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  uri(_nftId: BigInt): string {
    let result = super.call("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_nftId)
    ]);

    return result[0].toString();
  }

  try_uri(_nftId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_nftId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _controlCenter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _trustedForwarder(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _uri(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get value(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }
}

export class BurnBatchCall extends ethereum.Call {
  get inputs(): BurnBatchCall__Inputs {
    return new BurnBatchCall__Inputs(this);
  }

  get outputs(): BurnBatchCall__Outputs {
    return new BurnBatchCall__Outputs(this);
  }
}

export class BurnBatchCall__Inputs {
  _call: BurnBatchCall;

  constructor(call: BurnBatchCall) {
    this._call = call;
  }

  get account(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class BurnBatchCall__Outputs {
  _call: BurnBatchCall;

  constructor(call: BurnBatchCall) {
    this._call = call;
  }
}

export class CreateAccessNftsCall extends ethereum.Call {
  get inputs(): CreateAccessNftsCall__Inputs {
    return new CreateAccessNftsCall__Inputs(this);
  }

  get outputs(): CreateAccessNftsCall__Outputs {
    return new CreateAccessNftsCall__Outputs(this);
  }
}

export class CreateAccessNftsCall__Inputs {
  _call: CreateAccessNftsCall;

  constructor(call: CreateAccessNftsCall) {
    this._call = call;
  }

  get _nftURIs(): Array<string> {
    return this._call.inputValues[0].value.toStringArray();
  }

  get _accessNftURIs(): Array<string> {
    return this._call.inputValues[1].value.toStringArray();
  }

  get _nftSupplies(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class CreateAccessNftsCall__Outputs {
  _call: CreateAccessNftsCall;

  constructor(call: CreateAccessNftsCall) {
    this._call = call;
  }

  get nftIds(): Array<BigInt> {
    return this._call.outputValues[0].value.toBigIntArray();
  }
}

export class CreateAccessPackCall extends ethereum.Call {
  get inputs(): CreateAccessPackCall__Inputs {
    return new CreateAccessPackCall__Inputs(this);
  }

  get outputs(): CreateAccessPackCall__Outputs {
    return new CreateAccessPackCall__Outputs(this);
  }
}

export class CreateAccessPackCall__Inputs {
  _call: CreateAccessPackCall;

  constructor(call: CreateAccessPackCall) {
    this._call = call;
  }

  get _pack(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _nftURIs(): Array<string> {
    return this._call.inputValues[1].value.toStringArray();
  }

  get _accessNftURIs(): Array<string> {
    return this._call.inputValues[2].value.toStringArray();
  }

  get _nftSupplies(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get _packURI(): string {
    return this._call.inputValues[4].value.toString();
  }

  get _secondsUntilOpenStart(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _secondsUntilOpenEnd(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _nftsPerOpen(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }
}

export class CreateAccessPackCall__Outputs {
  _call: CreateAccessPackCall;

  constructor(call: CreateAccessPackCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class MintBatchCall extends ethereum.Call {
  get inputs(): MintBatchCall__Inputs {
    return new MintBatchCall__Inputs(this);
  }

  get outputs(): MintBatchCall__Outputs {
    return new MintBatchCall__Outputs(this);
  }
}

export class MintBatchCall__Inputs {
  _call: MintBatchCall;

  constructor(call: MintBatchCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class MintBatchCall__Outputs {
  _call: MintBatchCall;

  constructor(call: MintBatchCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class RedeemAccessCall extends ethereum.Call {
  get inputs(): RedeemAccessCall__Inputs {
    return new RedeemAccessCall__Inputs(this);
  }

  get outputs(): RedeemAccessCall__Outputs {
    return new RedeemAccessCall__Outputs(this);
  }
}

export class RedeemAccessCall__Inputs {
  _call: RedeemAccessCall;

  constructor(call: RedeemAccessCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RedeemAccessCall__Outputs {
  _call: RedeemAccessCall;

  constructor(call: RedeemAccessCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class SafeBatchTransferFromCall extends ethereum.Call {
  get inputs(): SafeBatchTransferFromCall__Inputs {
    return new SafeBatchTransferFromCall__Inputs(this);
  }

  get outputs(): SafeBatchTransferFromCall__Outputs {
    return new SafeBatchTransferFromCall__Outputs(this);
  }
}

export class SafeBatchTransferFromCall__Inputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeBatchTransferFromCall__Outputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetContractURICall extends ethereum.Call {
  get inputs(): SetContractURICall__Inputs {
    return new SetContractURICall__Inputs(this);
  }

  get outputs(): SetContractURICall__Outputs {
    return new SetContractURICall__Outputs(this);
  }
}

export class SetContractURICall__Inputs {
  _call: SetContractURICall;

  constructor(call: SetContractURICall) {
    this._call = call;
  }

  get _URI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetContractURICall__Outputs {
  _call: SetContractURICall;

  constructor(call: SetContractURICall) {
    this._call = call;
  }
}

export class SetRoyaltyBpsCall extends ethereum.Call {
  get inputs(): SetRoyaltyBpsCall__Inputs {
    return new SetRoyaltyBpsCall__Inputs(this);
  }

  get outputs(): SetRoyaltyBpsCall__Outputs {
    return new SetRoyaltyBpsCall__Outputs(this);
  }
}

export class SetRoyaltyBpsCall__Inputs {
  _call: SetRoyaltyBpsCall;

  constructor(call: SetRoyaltyBpsCall) {
    this._call = call;
  }

  get _royaltyBps(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetRoyaltyBpsCall__Outputs {
  _call: SetRoyaltyBpsCall;

  constructor(call: SetRoyaltyBpsCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}
