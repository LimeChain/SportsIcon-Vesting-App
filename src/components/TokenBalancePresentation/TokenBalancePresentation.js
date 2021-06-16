import '../../styles/components/_token-balance.scss';
import { useGlobalContext } from '../../context/GlobalContext';

const TokenBalancePresentation = () => {
    const { balanceTokSportsIconTokens, userWallet } = useGlobalContext();
    return (
       userWallet ? <div className='tokenBalanceWrapper'>
            <div className='label'>
                Sports Icon tokens:
            </div>
            <div className='amount'>
                {balanceTokSportsIconTokens}
            </div>
        </div> : ''
    )
}

export default TokenBalancePresentation;