const config = {
    "testnet": {
        "symbol": "ETH",
        "name": "Ethereum Ropsten",
        "network": "ropsten",
        "chain_id": 3,
        "network_id": 3,
        "rpc_url": `https://ropsten.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
    },
    "mainnet": {
        "symbol": "ETH",
        "name": "Ethereum Mainnet",
        "network": "mainnet",
        "chain_id": 1,
        "network_id": 1,
        "rpc_url": `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
    }
}

module.exports = config;