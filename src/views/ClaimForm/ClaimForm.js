import '../../styles/components/_inherit.scss'
import { useGlobalContext } from '../../context/GlobalContext';
import Balance from './Balance/Balance';

const ClaimForm = () => {
    const { sdk, freeTokens, setFreeTokens, setBalanceTokSportsIconTokens, transactionMining, setTransactionMining, isMetaMask, userWallet, userWalletAddress } = useGlobalContext();

    const CLAIM_STATUSES = {
        success: 1
    }

    const balanceOperations = async () => {
        const balance = await sdk.balanceOfSportsIconTokens(window.CONFIG.token, userWalletAddress);
        const freeTokens = await sdk.getUserFreeTokens(userWalletAddress);
        await setBalanceTokSportsIconTokens(balance);
        await setFreeTokens(freeTokens);
        await setTransactionMining(false);
    }

    const claimFreeTokens = async () => {
        try {
            await setTransactionMining(true);
            const tokensClaimedStatus = await sdk.claimFreeTokens();
            if (tokensClaimedStatus === CLAIM_STATUSES.success) {
                balanceOperations()
            } else {
                throw new Error('transaction failed');
            }
        } catch (error) {
            await setTransactionMining(false);
            // TODO show some notification
        }
    }

    return (
        userWallet ?
            <div className='claimForm'>
                <Balance />
                <div className='buttonWrapper' onClick={claimFreeTokens} >
                    <button className={transactionMining ? 'buttonClaiming' : ''}
                        disabled={!isMetaMask || transactionMining}>
                        {transactionMining ? 'Claiming...' : `Claim ${freeTokens} `}
                    </button>
                </div>
            </div> : ''
    )
}

export default ClaimForm;