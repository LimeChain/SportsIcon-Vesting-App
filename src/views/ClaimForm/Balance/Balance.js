import '../../../styles/components/_inherit.scss'
import { useGlobalContext } from '../../../context/GlobalContext';

const Balance= () => {
    const { vestedTokens, freeTokens } = useGlobalContext();

    return (
        <div className="balanceForm">
            <div className='amountClaim'>
               Free tokens: {freeTokens}
            </div>
            <div className='amountClaim'>
              Total amount vested tokens: {vestedTokens}
            </div>
        </div>
    )
}

export default Balance;