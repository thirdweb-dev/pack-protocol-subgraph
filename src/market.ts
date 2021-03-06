import { store, BigInt, BigDecimal } from "@graphprotocol/graph-ts";

import { NewListing, ListingUpdate, NewSale } from "../generated/Market/Market";
import { ERC20 } from "../generated/Market/ERC20";
import { ERC1155 } from "../generated/Market/ERC1155";

import { Listing, TokenListing } from "../generated/schema";

/**
 *
 * @param event NewListing(address indexed assetContract, address indexed seller, uint256 indexed listingId, Listing listing);
 */
export function handleNewListing(event: NewListing): void {
  let assetContract = event.params.assetContract;
  let tokenId = event.params.listing.tokenId;
  let tokenListingId = assetContract.toHexString() + "-" + tokenId.toString();
  let tokenListing = TokenListing.load(tokenListingId);
  if (tokenListing == null) {
    tokenListing = new TokenListing(tokenListingId);
    tokenListing.assetContract = assetContract;
    tokenListing.tokenId = tokenId;
    tokenListing.uri = ERC1155.bind(assetContract).uri(tokenId);
    tokenListing.save();
  }

  let listingId = event.params.listingId.toString();
  let listing = new Listing(listingId);

  listing.seller = event.params.seller.toHexString();
  listing.tokenListing = tokenListingId;
  listing.quantity = event.params.listing.quantity;
  listing.currency = event.params.listing.currency;
  listing.price = event.params.listing.pricePerToken;
  listing.tokensPerBuyer = event.params.listing.tokensPerBuyer;
  listing.saleStartTimestamp = event.params.listing.saleStart;
  listing.saleEndTimestamp = event.params.listing.saleEnd;

  let erc20 = ERC20.bind(event.params.listing.currency);
  let call_name = erc20.try_name();
  listing.currencyName = !call_name.reverted ? call_name.value : "";

  let call_symbol = erc20.try_symbol();
  listing.currencySymbol = !call_symbol.reverted ? call_symbol.value : "";

  let call_decimals = erc20.try_decimals();
  if (call_decimals.reverted) {
    listing.currencyDecimals = BigInt.fromI32(0);
    listing.currencyPrice = listing.price.toBigDecimal();
  } else {
    listing.currencyDecimals = BigInt.fromI32(call_decimals.value);
    let dec = BigInt.fromI32(10)
      .pow(call_decimals.value as u8)
      .toBigDecimal();
    listing.currencyPrice = listing.price.divDecimal(dec);
  }

  listing.save();
}

/**
 *
 * @param event ListingUpdate(address indexed seller, uint indexed listingId, Listing listing)
 */
export function handleListingUpdate(event: ListingUpdate): void {
  let assetContract = event.params.listing.assetContract;
  let tokenId = event.params.listing.tokenId;
  let tokenListingId = assetContract.toHexString() + "-" + tokenId.toString();
  let tokenListing = TokenListing.load(tokenListingId);
  if (tokenListing == null) {
    tokenListing = new TokenListing(tokenListingId);
    tokenListing.assetContract = assetContract;
    tokenListing.tokenId = tokenId;
    tokenListing.uri = ERC1155.bind(assetContract).uri(tokenId);
    tokenListing.save();
  }

  let listingId = event.params.listingId.toString();
  if (event.params.listing.quantity.equals(BigInt.fromI32(0))) {
    store.remove("Listing", listingId);
    return;
  }

  let listing = Listing.load(listingId);
  if (listing == null) {
    listing = new Listing(listingId);
  }

  listing.seller = event.params.seller.toHexString();
  listing.tokenListing = tokenListingId;
  listing.quantity = event.params.listing.quantity;
  listing.currency = event.params.listing.currency;
  listing.price = event.params.listing.pricePerToken;
  listing.tokensPerBuyer = event.params.listing.tokensPerBuyer;
  listing.saleStartTimestamp = event.params.listing.saleStart;
  listing.saleEndTimestamp = event.params.listing.saleEnd;

  let erc20 = ERC20.bind(event.params.listing.currency);
  let call_name = erc20.try_name();
  listing.currencyName = !call_name.reverted ? call_name.value : "";

  let call_symbol = erc20.try_symbol();
  listing.currencySymbol = !call_symbol.reverted ? call_symbol.value : "";

  let call_decimals = erc20.try_decimals();
  if (call_decimals.reverted) {
    listing.currencyDecimals = BigInt.fromI32(0);
    listing.currencyPrice = listing.price.toBigDecimal();
  } else {
    listing.currencyDecimals = BigInt.fromI32(call_decimals.value);
    let dec = BigInt.fromI32(10)
      .pow(call_decimals.value as u8)
      .toBigDecimal();
    listing.currencyPrice = listing.price.divDecimal(dec);
  }
  listing.save();
}

/**
 *
 * @param   event NewSale(address indexed assetContract, address indexed seller, uint indexed listingId, address buyer, Listing listing);
 */
export function handleNewSale(event: NewSale): void {
  let listingId = event.params.listingId.toString();
  let quantity = event.params.listing.quantity;
  if (quantity.equals(BigInt.fromI32(0))) {
    store.remove("Listing", listingId);
    return;
  }
  let listing = Listing.load(listingId);
  listing.quantity = quantity;
  listing.save();
}
