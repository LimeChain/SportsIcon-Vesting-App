import ConnectWindow from '../ConnectWindow/ConnectWindow';
import ClaimForm from '../ClaimForm/ClaimForm';
import { useGlobalContext } from '../../hooks/useGlobalContext';

const Home = () => {
    const { userWallet } = useGlobalContext();
    return (
        <main className='home'>
            {userWallet ? <ClaimForm/> : <ConnectWindow/>}
        </main>
    )
}

export default Home;