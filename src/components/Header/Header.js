import '../../styles/Header.scss';
import CurrentNetwork from '../Affordances/CurrentNetwork/CurrentNetwork';
import ConnectWallet from '../Affordances/ConnectWallet/ConnectWallet';
import TokenBalancePresentation from '../TokenBalancePresentation/TokenBalancePresentation';

const Header = () => { 

    return (
        <header className="mainHeader">
            <CurrentNetwork></CurrentNetwork>
            <TokenBalancePresentation></TokenBalancePresentation>
            <ConnectWallet></ConnectWallet>
        </header>
    )
}

export default Header;

