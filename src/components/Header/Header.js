import style from './Header.module.css';
import CurrentNetwork from '../Affordances/CurrentNetwork/CurrentNetwork';
import ConnectWallet from '../Affordances/ConnectWallet/ConnectWallet';

const Header = () => { 

    return (
        <header className={style["main-header"]}>
            <CurrentNetwork></CurrentNetwork>
            <ConnectWallet></ConnectWallet>
        </header>
    )
}

export default Header;