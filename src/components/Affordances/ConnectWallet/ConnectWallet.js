import { useEffect, useState, useRef } from 'react';
import '../../../styles/components/_button.scss';
import { useGlobalContext } from "../../../context/GlobalContext";
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import { formatAddress } from '../../../helpers/StringRenderOperations';
import WalletConnectProvider from "@walletconnect/web3-provider";

const ConnectWallet = () => {
    const {
        setNetwork,
        userWallet, setUserWallet,
        userWalletAddress, setUserWalletAddress,
        setSDK,
        connectionState, setConnectionState,
        isMetaMask, setMetaMask
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
            alert('Please install MetaMask wallet.')
        } else {
            setMetaMask(true)
        }
    }, [])

    useEffect(() => {
        const getData = async () => {
            const isConnected = localStorage.getItem("connection-status");
            if (isConnected) await onConnect()
        }
        getData()
    }, []);

    const checkSupportedNetwork = (chosenNetwork) => {
        return chosenNetwork === window.CONFIG?.chain_id ? true : false;
    }

    const onConnect = async () => {
        setConnectionState(true)
        try {
            const providerOptions = {
                walletconnect: {
                    package: WalletConnectProvider, 
                    options: {
                        infuraId: process.env.REACT_APP_CONFIG
                    }
                }
            };
            const web3Modal = new Web3Modal({
                cacheProvider: true,
                network: window.CONFIG.network,
                providerOptions
            });
            const instance = await web3Modal.connect();
            const provider = await new ethers.providers.Web3Provider(instance);
            await setInstance(instance);
            await setProvider(provider);
            const network = await provider.getNetwork();

            if (!checkSupportedNetwork(network.chainId)) {
                alert(`Please change network to currently supported one: ${window.CONFIG.network}`);
                setConnectionState(false);
                return;
            }

            const userWalletAddress = instance.selectedAddress ? instance.selectedAddress : instance?.accounts[0];
            const userWallet = await provider.getSigner();

            localStorage.setItem("connection-status", true);

            await setNetwork(network.name);
            await setUserWallet(userWallet);
            await setUserWalletAddress(userWalletAddress);
            await subscribeToProviderEvents(instance);
            await setConnectionState(false);

        } catch (e) {
            await setConnectionState(false);
            console.log(e)
        }

    }

    // Listen to the event, which originate from MetaMask wallet
    const subscribeToProviderEvents = async (instance) => {
        instance.on("accountsChanged", onChangeAccount);
        instance.on("chainChanged", onChangeChain);
    }


    // Change Account Callback
    const onChangeAccount = async (accounts) => {
        if (!accounts.length) return
        console.log(accounts.length)
        const userWallet = await providerRef.current.getSigner();
        const userWalletAddress = await userWallet.getAddress();
        // const sdk = await new RouterSDK(userWallet, window.CONFIG[symbol].contracts.router, routerContract.abi, ERC20Permit.abi, window.CONFIG[symbol].validators.london, thresholdBN);
        await setUserWallet(userWallet)
        await setUserWalletAddress(userWalletAddress);
    }


    // Change Network Callback
    const onChangeChain = async (networkId) => {
        const provider = await new ethers.providers.Web3Provider(instanceRef.current);
        const userWallet = await providerRef.current.getSigner();
        const userWalletAddress = await userWallet.getAddress();
        const network = await provider.getNetwork();
        if (window.CONFIG?.chain_id !== parseInt(networkId)) {
            if (!checkSupportedNetwork(network.chainId)) {
                alert(`Please change network to currently supported one: ${window.CONFIG.network}`);
            }
            onDisconnect();
            setConnectionState(false)
            return;
        }
        // const sdk = await new RouterSDK();
        await setProvider(provider);
        await setUserWallet(userWallet);
        await setUserWalletAddress(userWalletAddress);
        // await setSDK(sdk);
    }

    // On disconnect
    const onDisconnect = async () => {
        localStorage.removeItem("WEB3_CONNECT_CACHED_PROVIDER");
        localStorage.removeItem("connection-status");
        await setUserWalletAddress('');
        await setUserWallet('');
        await setSDK('');
        window.location.reload(false);
    }

    return (
        <div className='buttonWrapper'>
            {userWallet ?
                <button disabled={!isMetaMask}>{formatAddress(userWalletAddress)}</button>
                :
                connectionState ?
                    <button disabled={!isMetaMask}>Connecting...</button>
                    :
                    <button disabled={!isMetaMask} onClick={onConnect}>Connect</button>
            }
        </div>
    )
}


export default ConnectWallet;

