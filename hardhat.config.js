require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
const {API_URL_KEY, PRIVATE_KEY} = process.env;
module.exports = {
  solidity: "0.8.19",
  networks: {
    fuji: {
        url: API_URL_KEY,
        accounts: [PRIVATE_KEY]
    }
  }
};
