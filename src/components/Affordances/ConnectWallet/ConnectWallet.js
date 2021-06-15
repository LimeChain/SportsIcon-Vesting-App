import '../../../styles/components/_button.scss';
import { useGlobalContext } from "../../../context/GlobalContext"

const ConnectWallet = () => {
    const { variable } = useGlobalContext();
    console.log(variable) // check if global context is set up correctly
    return (
        <div className='buttonWrapper'>
            <button>Connect</button>
        </div>
    )
}

export default ConnectWallet