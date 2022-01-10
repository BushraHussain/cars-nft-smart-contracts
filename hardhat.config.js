require("@nomiclabs/hardhat-waffle");
const RINKEBY_PRIVATE_KEY = "e2174557ae6279df2e8ccbcaae1f961f90c18b149625df25eddd175fe831fa4b";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",

  networks: {
    rinkeby: {
      url: `https://rinkeby-light.eth.linkpool.io/`,
      accounts: [`${RINKEBY_PRIVATE_KEY}`]
    }
  }
};

