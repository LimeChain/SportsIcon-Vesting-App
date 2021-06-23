import '../../styles/components/Header.scss';
import TokenBalancePresentation from '../../components/Affordances/TokenBalancePresentation/TokenBalancePresentation';
import DisconnectWallet from '../Affordances/DisconnectWallet/DisconnectWallet';

const Header = () => {
    return (
        <header className="mainHeader">
            <TokenBalancePresentation />
            <DisconnectWallet />
        </header>
    )
}

export default Header;

