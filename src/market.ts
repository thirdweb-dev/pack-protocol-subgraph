import {
  NewListing,
  ListingUpdate
} from "../generated/Market/Market"

import { Listing } from "../generated/schema"

/**
 * 
 * @param event NewListing(address indexed assetContract, address indexed seller, Listing listing)
 */
export function handleNewListing(event: NewListing): void {

  let listingId = ""
  let listing = new Listing(listingId)

  listing.seller = event.params.seller.toHexString()
  listing.assetContract = event.params.assetContract
  listing.tokenId = event.params.listing.tokenId
  listing.quantity = event.params.listing.quantity
  listing.currency = event.params.listing.currency
  listing.price = event.params.listing.pricePerToken
  listing.saleStartTimestamp = event.params.listing.saleStart
  listing.saleEndTimestamp = event.params.listing.saleEnd

  listing.save()
}

/**
 * 
 * @param event ListingUpdate(address indexed seller, uint indexed listingId, Listing lisitng)
 */
export function handleListingUpdate(event: ListingUpdate): void {
  let listingId = event.params.listingId.toString()
  let listing = new Listing(listingId)

  listing.seller = event.params.seller.toHexString()
  listing.assetContract = event.params.lisitng.assetContract
  listing.tokenId = event.params.lisitng.tokenId
  listing.quantity = event.params.lisitng.quantity
  listing.currency = event.params.lisitng.currency
  listing.price = event.params.lisitng.pricePerToken
  listing.saleStartTimestamp = event.params.lisitng.saleStart
  listing.saleEndTimestamp = event.params.lisitng.saleEnd

  listing.save()
}