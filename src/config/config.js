const config = {
    "testnet": {
        "network": {
            "symbol": "ETH",
            "name": "Ethereum Ropsten",
            "network": "ropsten",
            "chain_id": 3,
            "network_id": 3,
            "rpc_url": `https://ropsten.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
            "explorer_url": "https://ropsten.etherscan.io/address/"
        },
        "contract": "0x67E5319DF1E577F482446d07cC0C23819890E6ee",
        "token": "0x21E5A30D8A325c24920570bEF1F30E48EB1bF0Ba"
    },
    "mainnet": {
        "network": {
            "symbol": "ETH",
            "name": "Ethereum Mainnet",
            "network": "mainnet",
            "chain_id": 1,
            "network_id": 1,
            "rpc_url": `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
            "explorer_url": "https://mainnet.etherscan.io/address/"
        },
        "contract": "",
        "token": ""
    }
}

module.exports = config;