import '../../styles/components/Header.scss';
import ContractsDropdown from '../../components/Affordances/ContractsDropdown/ContractsDropdown';
import DisconnectWallet from '../Affordances/DisconnectWallet/DisconnectWallet';
import { useGlobalContext } from '../../hooks/useGlobalContext';
import { SportIconLogo } from '../Vectors/SportIconLogo';

const Header = () => {
    const { userWallet } = useGlobalContext();
    return (
        <header className="mainHeader">
            <div className={`logoWrapper ${!userWallet && 'connect'}`}><SportIconLogo /></div>
            <ContractsDropdown />
            <DisconnectWallet />
        </header>
    )
}

export default Header;

