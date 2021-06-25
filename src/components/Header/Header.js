import '../../styles/components/Header.scss';
import TokenBalancePresentation from '../../components/Affordances/TokenBalancePresentation/TokenBalancePresentation';
import DisconnectWallet from '../Affordances/DisconnectWallet/DisconnectWallet';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import { SportIconLogo } from '../Vectors/SportIconLogo';
const Header = () => {
    const { userWallet } = useGlobalContext();
    return (
        <header className="mainHeader">
            <div className={`logoWrapper ${!userWallet && 'connect'}`}><SportIconLogo /></div>
            <TokenBalancePresentation />
            <DisconnectWallet />
        </header>
    )
}

export default Header;

