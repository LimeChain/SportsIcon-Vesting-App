import ConnectWallet from '../../components/Affordances/ConnectWallet/ConnectWallet';

const ConnectWindow = () => {
    const wavingHand = 'images/WavingHand.png';

    return (
       <section className='connectWindow'>
            <div className='welcome'>
                Welcome!  <div > <img src={wavingHand} alt='waving-hand' /></div>
            </div>
            <div className='guideline'>
                Connect to your wallet to proceed to access the platform
            </div>
            <ConnectWallet />
        </section >
    )
}

export default ConnectWindow;