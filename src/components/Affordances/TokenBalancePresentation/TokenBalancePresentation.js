import '../../../styles/components/_inherit.scss';
import { useGlobalContext } from '../../../hooks/useGlobalContext';
import CurrentNetwork from '../CurrentNetwork/CurrentNetwork';

const TokenBalancePresentation = () => {
    const { balanceTokSportsIconTokens, userWallet } = useGlobalContext();
    return (
        userWallet &&
        <div className='networkAndTokens'>
            <CurrentNetwork />
            <div className='tokenBalanceWrapper'>
                <div className='label'>
                    Sports Icon tokens:
            </div>
                <div className='amount'>
                    {balanceTokSportsIconTokens}
                </div>
            </div>
        </div>
    )
}

export default TokenBalancePresentation;