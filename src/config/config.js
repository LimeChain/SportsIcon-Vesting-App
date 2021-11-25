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
        "contracts": ["0x6Dd5a10C0A39838f8fDA2D40156aba01f17F7F95", "0x5C34c083C251AeD727d49b5Ab7ae32eE65e0Aad8", "0xBc17D3E15c6fDBA9BfE9689F370a284F1ecf5278"],
        "token": "0xBf2036D15372ebbDB3f3884Edd097E21DD87bB62"
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
        "contracts": ["0x3246Ddc1ee20985547493a7FD77533Eb17493D73", "0x1B1Fd2ee70f2b63361FdAAD664E327a3c95B6Acc", "0x467D30A4F95B23F6d69b62f24772d900212252d8"],
        "token": "0x3F68e7B44e9bCB486C2FeAdB7A2289D9cdFC9088"
    }
}

module.exports = config;