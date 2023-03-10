const {expect} = require("chai");

describe("Token contract", function() {

    it("Deployment should assign the total supply of tokens of the owner",async function(){

        const [owner] = await ethers.getSigners();

        console.log("Signers object:",owner);

        const Token = await ethers.getContractFactory("Token");

        const hardhatToken = await Token.deploy();

        const ownerBalance= await  hardhatToken.balanceof(owner.address);
        console.log("Owner Address: ",owner.address);

        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);

    });
});