import '../../styles/Header.scss';
import CurrentNetwork from '../Affordances/CurrentNetwork/CurrentNetwork';
import ConnectWallet from '../Affordances/ConnectWallet/ConnectWallet';

const Header = () => { 

    return (
        <header className="mainHeader">
            <CurrentNetwork></CurrentNetwork>
            <ConnectWallet></ConnectWallet>
        </header>
    )
}
export default Header