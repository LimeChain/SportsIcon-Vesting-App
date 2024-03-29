import '../../styles/components/_inherit.scss'
import { useGlobalContext } from '../../hooks/useGlobalContext';
import { showNotification } from '../../helpers/showNotification';
import { renderTokenAmount } from '../../helpers/stringRenderOperations';
import InfoPopup from '../../components/Affordances/InfoPopup/InfoPopup';
import { useEffect, useState } from 'react';

const ClaimForm = () => {
    const { sdk, freeTokens, vestedTokens, setFreeTokens, setBalanceIcons, transactionMining, setTransactionMining, isMetaMask, userWalletAddress } = useGlobalContext();

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
        await setBalanceIcons(balance);
        await setFreeTokens(freeTokens);
        await setTransactionMining(false);
    }

    const claimFreeTokens = async () => {
        try {
            await setTransactionMining(true);
            const tokensClaimedReceipt = await sdk.claimFreeTokens();
            if (tokensClaimedReceipt.status === CLAIM_STATUSES.success) {
                balanceOperations();
                const linkToExplorer = window.CONFIG.network.explorer_url + tokensClaimedReceipt.transactionHash;
                showNotification(`Transaction successfully mined.`, 'sports-icon-success', linkToExplorer);
            }
        } catch (error) {
            await setTransactionMining(false);
            showNotification(error.message);
        }
    }

    return (
        <section className='claimContainer'>
            <div className="dataForm">
                <div className='balance'>
                    <div className='freeTokensPopupWrapper'> <span> FREE TOKENS </span><InfoPopup text={'Free tokens is the amount of tokens a user could claim to present time.'} widthRestriction /></div>
                    <span className='details'>{renderTokenAmount(freeTokens)}</span>
                </div>
                <div className='balance'>
                    <div className='freeTokensPopupWrapper'><span> TOTAL VESTED TOKENS </span><InfoPopup text={'Total vested tokens is the amount of tokens a user could claim during specific period of time.'} widthRestriction /></div>
                    <span className='details'>{renderTokenAmount(vestedTokens)}</span>
                </div>
            </div>
            <div className='buttonWrapper claiming'>
                <button onClick={claimFreeTokens} className={transactionMining ? 'buttonClaiming hoverAction' : ''}
                   disabled={!isMetaMask || transactionMining || !freeTokensBool}>
                    {transactionMining ? 'Claiming...' : `Claim`}
                </button>
            </div>
        </section>
    )
}

export default ClaimForm;