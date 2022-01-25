pragma solidity ^0.8.0;

// SPDX-License-Identifier: MIT

contract Donation {
    address payable public owner;
    address[] public donators;
    mapping(address => uint256) balances;

    constructor() {
        owner = payable(msg.sender);
    }

    function gatherDonation() public payable {
        require(msg.value >= .001 ether);
        donators.push(msg.sender);
        balances[msg.sender] = msg.value;
    }

    function transferToOwner(address payable outAddress) external {
        require(msg.sender == owner);
        outAddress.transfer(address(this).balance);
    }

    function getDonators() public view returns (address[] memory) {
        return donators;
    }

    function getDonatorTotalSum(address donator) public view returns (uint256) {
        return balances[donator];
    }
}
