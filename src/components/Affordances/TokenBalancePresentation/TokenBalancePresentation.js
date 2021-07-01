import '../../../styles/components/_inherit.scss';
import { useGlobalContext } from '../../../hooks/useGlobalContext';
import CurrentNetwork from '../CurrentNetwork/CurrentNetwork';
import { renderTokenAmount } from '../../../helpers/stringRenderOperations'
const TokenBalancePresentation = () => {
    const { balanceTokSportsIconTokens, userWallet } = useGlobalContext();
    return (
        userWallet &&
        <div className='networkAndTokens'>
            <CurrentNetwork />
            <div className='tokenBalanceWrapper'>
                <div className='innerContainerTokenBalanceWrapper'>
                    <span className='label'>
                        Sports Icon Tokens:
                    </span>
                    <span className='amount'>
                        {renderTokenAmount(balanceTokSportsIconTokens)}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TokenBalancePresentation;