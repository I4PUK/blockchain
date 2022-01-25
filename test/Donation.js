const { expect } = require("chai");

describe("Token contract", function () {

  let Token;
  let hardhatToken;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    Token = await ethers.getContractFactory("Donation");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    hardhatToken = await Token.deploy();
  });

  it("Should set the right owner", async function () {
      expect(await hardhatToken.owner()).to.equal(owner.address);
    });

    describe("Transaction", function() {
    it("Transfer token to owner", async function () {
      await hardhatToken.transferToOwner(addr1.address);
      expect(addr1Balance).to.equal(50);
    });
  });
});

