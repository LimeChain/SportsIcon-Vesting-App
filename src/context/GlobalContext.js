import React, { createContext, useContext, useState } from "react";

const initialState = {
    isMetaMask: false,
    connectionState: false,
    network: '',
    userWallet: '',
    userWalletAddress: '',
    transactionIsInProgress: false,
    sdk: '',
    balanceSportsIconTokens: 0,
    vestedTokens: 0,
    freeTokens: 0,
}

const GlobalContext = createContext(initialState);
const UpdateGlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [isMetaMask, setMetaMask] = useState(initialState.isMetaMask);
    const [balanceTokSportsIconTokens, setBalanceTokSportsIconTokens] = useState(initialState.balanceSportsIconTokens);
    const [network, setNetwork] = useState(initialState.network);
    const [userWallet, setUserWallet] = useState(initialState.userWallet);
    const [userWalletAddress, setUserWalletAddress] = useState(initialState.userWalletAddress);
    const [transactionIsInProgress, setTransactionIsInProgress] = useState(initialState.transactionIsInProgress);
    const [sdk, setSDK] = useState(initialState.sdk);
    const [balanceSportsIconTokens, setBalanceSportsIconTokens] = useState(initialState.balanceSportsIconTokens);
    const [vestedTokens, setVestedTokens] = useState(initialState.vestedTokens);
    const [freeTokens, setFreeTokens] = useState(initialState.freeTokens);
    const [connectionState, setConnectionState] = useState(initialState.connectionState);

    return (
        <GlobalContext.Provider value={{
            userWallet,
            userWalletAddress,
            transactionIsInProgress,
            sdk,
            balanceSportsIconTokens,
            vestedTokens,
            freeTokens,
            connectionState,
            isMetaMask,
            network,
            balanceTokSportsIconTokens, 
        }}>
            <UpdateGlobalContext.Provider value={{
                setUserWallet,
                setUserWalletAddress,
                setTransactionIsInProgress,
                setSDK,
                setBalanceSportsIconTokens,
                setVestedTokens,
                setFreeTokens,
                setConnectionState,
                setMetaMask,
                setNetwork,
                setBalanceTokSportsIconTokens
            }}>
                {children}
            </UpdateGlobalContext.Provider>
        </GlobalContext.Provider>
    )
}

export function useGlobalContext() {
    const globalContext = useContext(GlobalContext)
    const updateGlobalContext = useContext(UpdateGlobalContext)

    return {
        ...globalContext,
        ...updateGlobalContext
    }
}
