import { useEffect, useState, useRef } from 'react';
import '../../../styles/components/_inherit.scss';
import { useGlobalContext } from "../../../hooks/useGlobalContext";
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import WalletConnectProvider from "@walletconnect/web3-provider";
import RouterSDK from '../../../sdk/sdk';
import routerContract from '../../../abis/ISportsIconPrivateVesting.json';
import ERC20 from '../../../abis/SportsIcon.json';
import { showNotification } from '../../../helpers/showNotification';
import { localStorageOperations } from '../../../helpers/localStorageOperations';
import { formatNetworkName } from '../../../helpers/stringRenderOperations';

const ConnectWallet = () => {
    const {
        setNetwork,
        userWallet,
        setUserWallet,
        setUserWalletAddress,
        setSDK,
        connectionState,
        setConnectionState,
        isMetaMask,
        setMetaMask,
        setBalanceIcons,
        setVestedTokens,
        setFreeTokens,
    } = useGlobalContext();

    const [provider, _setProvider] = useState('');
    const [instance, _setInstance] = useState('');

    const providerRef = useRef(provider)
    const instanceRef = useRef(instance)

    const setProvider = data => {
        providerRef.current = data;
        _setProvider(data);
    };

    const setInstance = data => {
        instanceRef.current = data;
        _setInstance(data);
    };

    useEffect(() => {
        if (!window.ethereum?.isMetaMask || !window.web3) {
            setMetaMask(false)
            showNotification('Please install MetaMask wallet.')
        } else {
            setMetaMask(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const getData = async () => {
            const isConnected = localStorage.getItem("connection-status");
            if (isConnected) await onConnect()
        }
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const checkSupportedNetwork = (chosenNetwork) => {
        return chosenNetwork === window.CONFIG?.network.chain_id ? true : false;
    }

    const updateGlobalStateQuantities = async (userWallet, userWalletAddress) => {
        const sdk = await new RouterSDK(userWallet, window.CONFIG.contracts[0], routerContract.abi, ERC20.abi);
        const balance = await sdk.balanceOfSportsIconTokens(window.CONFIG.token, userWalletAddress);
        const totalAmountVestedTokens = await sdk.getUserTotalVestedAmount(userWalletAddress);
        const freeTokens = await sdk.getUserFreeTokens(userWalletAddress);
        await setSDK(sdk);
        await setBalanceIcons(balance);
        await setVestedTokens(totalAmountVestedTokens);
        await setFreeTokens(freeTokens);
    }

    const onConnect = async () => {
        setConnectionState(true)
        try {
            const providerOptions = {
                walletconnect: {
                    package: WalletConnectProvider,
                    options: {
                        infuraId: process.env.REACT_APP_INFURA_ID
                    }
                }
            };

            const web3Modal = new Web3Modal({
                cacheProvider: true,
                network: window.CONFIG.network.network,
                providerOptions
            });

            const instance = await web3Modal.connect();
            const provider = await new ethers.providers.Web3Provider(instance);
            await setInstance(instance);
            await setProvider(provider);
            const network = await provider.getNetwork();

            if (!checkSupportedNetwork(network.chainId)) {
                showNotification(`Please change network to: Ethereum ${formatNetworkName(window.CONFIG.network.network)}.`);
                localStorageOperations();
                setConnectionState(false);
                return;
            }

            const userWallet = await provider.getSigner();
            const userWalletAddress = await userWallet.getAddress();

            localStorage.setItem("connection-status", true);

            await setNetwork(network.name);
            await setUserWallet(userWallet);
            await setUserWalletAddress(userWalletAddress);
            await subscribeToProviderEvents(instance);
            await setConnectionState(false);
            await updateGlobalStateQuantities(userWallet, userWalletAddress);


        } catch (e) {
            await setConnectionState(false);
        }
    }

    // Listen to the event, which originates from MetaMask wallet
    const subscribeToProviderEvents = async (instance) => {
        instance.on("accountsChanged", onChangeAccount);
        instance.on("chainChanged", onChangeChain);
        instance.on("disconnect", onDisconnect)
    }

    // Change Account Callback
    const onChangeAccount = async (accounts) => {
        if (!accounts.length) return
        const userWallet = await providerRef.current.getSigner();
        const userWalletAddress = await userWallet.getAddress();

        await setUserWallet(userWallet);
        await setUserWalletAddress(userWalletAddress);
        await updateGlobalStateQuantities(userWallet, userWalletAddress);
    }

    const networkOperations = (networkToBeChecked) => {
        if (!checkSupportedNetwork(networkToBeChecked.chainId)) {
            onDisconnect();
            setConnectionState(false);
            return;
        }
    }

    // Change Network Callback
    const onChangeChain = async (networkId) => {
        const provider = await new ethers.providers.Web3Provider(instanceRef.current);
        const userWallet = await providerRef.current.getSigner();
        const userWalletAddress = await userWallet.getAddress();
        const network = await provider.getNetwork();
        if (window.CONFIG?.chain_id !== parseInt(networkId)) {
            networkOperations(network);
            return;
        }
        await setProvider(provider);
        await setUserWallet(userWallet);
        await setUserWalletAddress(userWalletAddress);
        await updateGlobalStateQuantities(userWallet, userWalletAddress);
    }

    // On disconnect
    const onDisconnect = async () => {
        localStorageOperations();
        await setUserWalletAddress('');
        await setUserWallet('');
        await setSDK('');
        window.location.reload(false);
    }

    return (
        !userWallet &&
        <div className='buttonWrapper'> {
            connectionState ?
                <button className='buttonConnecting hoverAction' disabled={!isMetaMask} > Connecting... </button>
                :
                <button disabled={!isMetaMask} className='buttonConnecting notConnected' onClick={onConnect} > Connect Wallet</button>
        } </div>
    )
}


export default ConnectWallet;