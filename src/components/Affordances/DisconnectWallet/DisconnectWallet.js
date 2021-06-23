import { Fragment } from 'react';
import '../../../styles/components/_inherit.scss';
import { useGlobalContext } from "../../../hooks/useGlobalContext";
import { localStorageOperations } from '../../../helpers/localStorageOperations';
import { formatAddress } from '../../../helpers/stringRenderOperations';

const DisconnectWallet = () => {
    const {
        isMetaMask,
        userWallet,
        userWalletAddress,
        setUserWallet,
        setUserWalletAddress,
        setSDK,
    } = useGlobalContext();

    const onDisconnect = async () => {
        localStorageOperations();
        await setUserWalletAddress('');
        await setUserWallet('');
        await setSDK('');
        window.location.reload(false);
    }

    return (
        userWallet && <div className='buttonWrapper disconnect'> {
            <Fragment>
                <button className='buttonConnectivity' disabled={!isMetaMask} > {formatAddress(userWalletAddress)} </button>
                <button className='buttonDisconnect' onClick={onDisconnect} > 1 </button>
            </Fragment>
        } </div>
    )
}


export default DisconnectWallet;