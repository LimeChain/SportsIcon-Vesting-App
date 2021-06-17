import '../../styles/Header.scss';
import CurrentNetwork from '../Affordances/CurrentNetwork/CurrentNetwork';
import ConnectWallet from '../Affordances/ConnectWallet/ConnectWallet';
import TokenBalancePresentation from '../../views/TokenBalancePresentation/TokenBalancePresentation';

const Header = () => {

    return (
        <header className="mainHeader">
            <CurrentNetwork />
            <TokenBalancePresentation />
            <ConnectWallet />
        </header>
    )
}

export default Header;

