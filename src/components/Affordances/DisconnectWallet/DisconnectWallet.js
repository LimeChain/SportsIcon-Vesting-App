import { Fragment } from 'react';
import '../../../styles/components/_inherit.scss';
import { useGlobalContext } from "../../../hooks/useGlobalContext";
import { localStorageOperations } from '../../../helpers/localStorageOperations';
import { formatAddress } from '../../../helpers/stringRenderOperations';
import { DisconnectIcon } from '../../Vectors/DisconnectIcon';

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
                <div className='userAddress' disabled={!isMetaMask} > {formatAddress(userWalletAddress)} </div>
                <button className='buttonDisconnect' onClick={onDisconnect} > <DisconnectIcon color={'white'}/> </button>
            </Fragment>
        } </div>
    )
}


export default DisconnectWallet;