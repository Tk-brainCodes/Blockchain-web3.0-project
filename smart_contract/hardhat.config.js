

require('@nomiclabs/hardhat-waffle')

module.export = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/90A-t4dNYCpbHK29HkfqTn3ek6OBYb8g',
      account: ['61ff41ce83111d9ed9d44bdc79ad1d62392373be5d881d632a9e05a1140ea1c1']
    }
  }
}