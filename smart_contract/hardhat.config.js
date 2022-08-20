// https://polygon-mumbai.g.alchemy.com/v2/4XsMTcS0EZQXAeQxE9J1NQeUVbz96muJ
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/4XsMTcS0EZQXAeQxE9J1NQeUVbz96muJ',
      accounts: ['9ed1081454bbeadfc177458b37b14afe10752cc4c95ddfae1d5c6a34009b6943']
    }
  }
}

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();
//
//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });
//
// // You need to export an object to set up your config
// // Go to https://hardhat.org/config/ to learn more
//
// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */
// module.exports = {
//   solidity: "0.8.4",
// };
