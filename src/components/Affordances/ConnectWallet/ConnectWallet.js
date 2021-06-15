import style from '../../Component.module.css';
import { useGlobalContext } from "../../../context/GlobalContext"

const ConnectWallet = () => {
    const { variable } = useGlobalContext();
    console.log(variable) // check if global context is set up correctly
    return (
        <div className={style['button-wrapper']}>
            <button className={style.button}>Connect</button>
        </div>
    )
}

export default ConnectWallet