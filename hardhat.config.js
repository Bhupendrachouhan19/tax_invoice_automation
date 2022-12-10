require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({ path: './.env.local' });

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
    // console.log(account); // print accounts with full details
  }
})

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      chainId: 5,
      url: process.env.PUBLIC_RPC_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};




