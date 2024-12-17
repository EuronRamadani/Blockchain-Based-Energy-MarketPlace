// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./UserContract.sol";

contract MarketContract {
    struct Listing {
        address seller;
        uint256 units;
        uint256 pricePerUnit;
        bool active;
    }

    struct Transaction {
        address buyer;
        address seller;
        uint256 units;
        uint256 totalCost;
    }

    UserContract public userContract;

    Transaction[] public transactions;
    Listing[] public listings;

    // Define an Event
    event PurchaseEvent(
        uint256 indexed listingId,
        address indexed buyer,
        address indexed seller,
        uint256 units,
        uint256 totalCost
    );

    event DebugValues(uint256 pricePerUnit, uint256 units, uint256 msgValue);

    constructor(address _userContract) {
        userContract = UserContract(_userContract);
    }

    function addListing(uint256 units, uint256 pricePerUnit) public {
        require(units > 0, "The Value of Units must be higher than 0");
        require(pricePerUnit > 0, "The value of the price must be higher than 0");

        UserContract.Role role = userContract.getUserRole(msg.sender);

        require(
            role == UserContract.Role.Seller,
            "Only sellers can add listings"
        );
        listings.push(Listing(msg.sender, units, pricePerUnit, true));
    }

    function purchase(uint256 listingId) public payable {
        Listing storage listing = listings[listingId];

        require(listing.active, "Listing is not active");
        require(
            listing.units > 0 && listing.pricePerUnit > 0,
            "Invalid listing values"
        );

        UserContract.Role role = userContract.getUserRole(msg.sender);
        require(role == UserContract.Role.Buyer, "Only buyers can purchase");

        uint256 totalCost = listing.pricePerUnit * listing.units;
        require(
            msg.value == totalCost,
            "The sent ether amount must equal (price per unit * units)"
        );

        // Mark the listing as inactive before transferring funds
        listing.active = false;

        // Record the transaction
        transactions.push(
            Transaction(msg.sender, listing.seller, listing.units, totalCost)
        );

        // Transfer funds
        payable(listing.seller).transfer(totalCost);

        // Emit the purchase event
        emit PurchaseEvent(
            listingId,
            msg.sender,
            listing.seller,
            listing.units,
            totalCost
        );
    }

    function getListingCount() public view returns (uint256) {
        return listings.length;
    }
}
