const UserContract = artifacts.require("UserContract");
const MarketContract = artifacts.require("MarketContract");

module.exports = async function (deployer) {
    // Deploy UserContract
    await deployer.deploy(UserContract);

    // Deploy MarketContract and pass the addresses of UserContract and EnergyDataContract
    const userContract = await UserContract.deployed();

    await deployer.deploy(MarketContract, userContract.address);
};
