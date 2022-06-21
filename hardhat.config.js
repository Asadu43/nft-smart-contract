require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.4",
   defaultNetwork: "rinkeby",
   networks: {
      hardhat: {},
      rinkeby: {
         url: "https://rinkeby.infura.io/v3/c9f97db119954414876ad3649ddb8c69",
         accounts: ["628fa839207d257a0c26d7d5c01a669eaf94f308f2e30eb464d89d2a600ddad0"]
      }
   },
}