import '../../styles/components/_inherit.scss'
import { useGlobalContext } from '../../hooks/useGlobalContext';
import { showNotification } from '../../helpers/showNotification';
import { renderTokenAmount } from '../../helpers/stringRenderOperations';

import InfoPopup from '../../components/Affordances/InfoPopup/InfoPopup';
import { useEffect, useState } from 'react';

const ClaimForm = () => {
    const { sdk, freeTokens, vestedTokens, setFreeTokens, setBalanceTokSportsIconTokens, transactionMining, setTransactionMining, isMetaMask, userWalletAddress } = useGlobalContext();

    const [freeTokensBool, setFreeTokensBool] = useState(false);

    useEffect(() => {
        setFreeTokensBool(Number(freeTokens) > 0 ? true : false);
    }, [freeTokens]);


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
                showNotification('Transaction successfully mined.', 'sports-icon-success')
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
                    <p> <span> Free tokens </span><InfoPopup text={'Free tokens is the amount of tokens a user could claim to present time.'} widthRestriction /></p>
                    <span className='amount'>{renderTokenAmount(freeTokens)}</span>
                </div>
                <div className='balance'>
                    <p><span> Total vested tokens </span><InfoPopup text={'Total vested tokens is the amount of tokens a user could claim during specific period of time.'} widthRestriction /></p>
                    <span className='amount'>{renderTokenAmount(vestedTokens)}</span>
                </div>
            </div>
            <div className='buttonWrapper claiming' onClick={claimFreeTokens} >
                <button className={transactionMining ? 'buttonClaiming hoverAction' : ''}
                    disabled={!isMetaMask || transactionMining || !freeTokensBool}>
                    {transactionMining ? 'Claiming...' : `Claim`}
                </button>
            </div>
        </section>
    )
}

export default ClaimForm;