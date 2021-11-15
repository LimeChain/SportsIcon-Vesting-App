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
        "contracts": ["0x4b928BE2771A30bE8FAed062195150e1837E1CcD", "0xB3f1000dC34C0B59a148f040fe536d9DABDe6c8C", "0x19E6378cb7B023FC25d8e27C4b036c3E48581Bfb"],
        "token": "0xF6A74f24123171Ddf469B063f8230E351Ef7d50F"
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