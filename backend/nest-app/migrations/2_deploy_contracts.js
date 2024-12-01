const UserContract = artifacts.require("UserContract");
const EnergyDataContract = artifacts.require("EnergyDataContract");
const EnergySwapToken = artifacts.require("EnergySwapToken");
const MarketContract = artifacts.require("MarketContract");

module.exports = async function (deployer) {
    // Deploy UserContract
    await deployer.deploy(UserContract);

    // Deploy EnergyDataContract
    await deployer.deploy(EnergyDataContract);

    // Deploy EnergySwapToken
    await deployer.deploy(EnergySwapToken);

    // Deploy MarketContract and pass the addresses of UserContract and EnergyDataContract
    const userContract = await UserContract.deployed();
    const energyDataContract = await EnergyDataContract.deployed();
    await deployer.deploy(MarketContract, userContract.address, energyDataContract.address);
};
