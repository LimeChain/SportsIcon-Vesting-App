import '../../styles/components/_inherit.scss'
import { useGlobalContext } from '../../hooks/useGlobalContext';
import { showNotification } from '../../helpers/showNotification';

const ClaimForm = () => {
    const { sdk, freeTokens, vestedTokens, setFreeTokens, setBalanceTokSportsIconTokens, transactionMining, setTransactionMining, isMetaMask, userWalletAddress } = useGlobalContext();

    const CLAIM_STATUSES = {
        success: 1
    };

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
                balanceOperations();
                showNotification('Transaction successfully mined.')
            } else {
                throw new Error('Transaction failed mining.');
            }
        } catch (error) {
            await setTransactionMining(false);
            showNotification('Transaction failed mining.')
        }
    }

    return (
        <section className='claimContainer'>
            <div className="dataForm">
                <div className='balance'>
                    Free tokens <span className='amount'>{freeTokens}</span>
                </div>
                <div className='balance'>
                    Total amount vested tokens <span className='amount'>{vestedTokens}</span>
                </div>
            </div>
            <div className='buttonWrapper' onClick={claimFreeTokens} >
                <button className={transactionMining ? 'buttonClaiming hoverAction' : ''}
                    disabled={!isMetaMask || transactionMining}>
                    {transactionMining ? 'Claiming...' : `Claim`}
                </button>
            </div>
        </section>
    )
}

export default ClaimForm;