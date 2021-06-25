import ConnectWallet from '../../components/Affordances/ConnectWallet/ConnectWallet';
import { useGlobalContext } from '../../hooks/useGlobalContext';


const ConnectWindow = () => {
    const { userWallet } = useGlobalContext();
    const wavingHand = 'images/WavingHand.png';
    return (
        !userWallet &&
        <div className='connectWindow'>
            <div className='welcome'>
                Welcome!  <div > <img src={wavingHand} alt='waving-hand'/></div>
            </div>
            <div className='guideline'>
                Connect to your wallet to proceed to access the platform
            </div>
            <ConnectWallet />
        </div >
    )
}

export default ConnectWindow;