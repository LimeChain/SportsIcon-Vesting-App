import React, { createContext, useState } from "react";

const initialState = {
    isMetaMask: false,
    connectionState: false,
    network: '',
    userWallet: '',
    userWalletAddress: '',
    transactionIsInProgress: false,
    sdk: '',
    contract: 0,
    balanceSportsIconTokens: 0,
    vestedTokens: 0,
    freeTokens: 0,
    transactionMining: false,
}

export const GlobalContext = createContext(initialState);
export const UpdateGlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [isMetaMask, setMetaMask] = useState(initialState.isMetaMask);
    const [balanceIcons, setBalanceIcons] = useState(initialState.balanceSportsIconTokens);
    const [contract, setContract] = useState(initialState.contract);
    const [network, setNetwork] = useState(initialState.network);
    const [userWallet, setUserWallet] = useState(initialState.userWallet);
    const [userWalletAddress, setUserWalletAddress] = useState(initialState.userWalletAddress);
    const [transactionIsInProgress, setTransactionIsInProgress] = useState(initialState.transactionIsInProgress);
    const [sdk, setSDK] = useState(initialState.sdk);
    const [vestedTokens, setVestedTokens] = useState(initialState.vestedTokens);
    const [freeTokens, setFreeTokens] = useState(initialState.freeTokens);
    const [connectionState, setConnectionState] = useState(initialState.connectionState);
    const [transactionMining, setTransactionMining] = useState(initialState.transactionMining);
    return (
        <GlobalContext.Provider value={{
            userWallet,
            userWalletAddress,
            transactionIsInProgress,
            contract,
            sdk,
            vestedTokens,
            freeTokens,
            connectionState,
            isMetaMask,
            network,
            balanceIcons,
            transactionMining
        }}>
            <UpdateGlobalContext.Provider value={{
                setUserWallet,
                setUserWalletAddress,
                setTransactionIsInProgress,
                setContract,
                setSDK,
                setVestedTokens,
                setFreeTokens,
                setConnectionState,
                setMetaMask,
                setNetwork,
                setBalanceIcons,
                setTransactionMining
            }}>
                {children}
            </UpdateGlobalContext.Provider>
        </GlobalContext.Provider>
    )
}

