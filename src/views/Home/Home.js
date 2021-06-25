import ConnectWindow from '../ConnectWindow/ConnectWindow';
import ClaimForm from '../ClaimForm/ClaimForm';

const Home = () => {
    return (
        <div className='home'>
            <ConnectWindow></ConnectWindow>
            <ClaimForm></ClaimForm>
        </div>
    )
}

export default Home;