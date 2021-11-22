const config = {
    "testnet": {
        "network": {
            "symbol": "ETH",
            "name": "Ethereum Rinkeby",
            "network": "rinkeby",
            "chain_id": 4,
            "network_id": 4,
            "rpc_url": `https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
            "explorer_url": "https://rinkeby.etherscan.io/tx/"
        },
        "contracts": ["0x2B837182c18502cebD0420eE75B8FA1FFfC1E9EC", "0x30a08e26c114Be3F3cB4a60A8BD83E8E2B1969aa", "0x5a5364C70eFc59569D85d412E363772A9C49DcfA"],
        "token": "0xC8479c296216C5e581058d06DF0bdb3b411c6119"
    },
    "mainnet": {
        "network": {
            "symbol": "ETH",
            "name": "Ethereum Mainnet",
            "network": "mainnet",
            "chain_id": 1,
            "network_id": 1,
            "rpc_url": `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
            "explorer_url": "https://mainnet.etherscan.io/tx/"
        },
        "contract": "",
        "token": ""
    }
}

module.exports = config;