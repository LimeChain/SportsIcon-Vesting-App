import '../../../styles/components/_inherit.scss';
import { useGlobalContext } from '../../../hooks/useGlobalContext';
import CurrentNetwork from '../CurrentNetwork/CurrentNetwork';
import { formatAddress, renderTokenAmount } from '../../../helpers/stringRenderOperations';
import routerContract from '../../../abis/ISportsIconPrivateVesting.json';
import ERC20 from '../../../abis/SportsIcon.json';
import RouterSDK from '../../../sdk/sdk';
import { useState, useEffect, useRef } from "react";
import { Arrow } from '../../Vectors/Arrow';

const ContractsDropdown = () => {
    const [dropdown, setDropdown] = useState(false);
    const { contract, setContract, setSDK, balanceIcons, setBalanceIcons, setFreeTokens, setVestedTokens, userWallet, userWalletAddress } = useGlobalContext();
    const renderedRef = useRef(false);
    const dropdownRef = useRef();
    
    const contractPeriods = ["PRE-SALE", "SALE", "SALE+"];

    useEffect(() => {

        if (userWallet) {
            if (renderedRef) {
                (async () => {
                    const sdk = await new RouterSDK(userWallet, window.CONFIG.contracts[contract], routerContract.abi, ERC20.abi);
                    const balance = await sdk.balanceOfSportsIconTokens(window.CONFIG.token, userWalletAddress);
                    const totalAmountVestedTokens = await sdk.getUserTotalVestedAmount(userWalletAddress);
                    const freeTokens = await sdk.getUserFreeTokens(userWalletAddress);
                    await setSDK(sdk);
                    await setBalanceIcons(balance);
                    await setVestedTokens(totalAmountVestedTokens);
                    await setFreeTokens(freeTokens);
                })();
            } else {
                renderedRef.current = true;
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [contract])

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (dropdown && dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdown(false);
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        }
    }, [dropdown])

    return (
        userWallet &&
        <div className='networkAndTokens'>
            <div>

                <CurrentNetwork />

                <ul className="dropdown" ref={dropdownRef}>
                    <div className='contract' onClick={() => setDropdown(!dropdown)}>
                        <div className='contractDetailsWrapper main'>
                            <span className='label main'>
                                {`${contractPeriods[contract]} $ICONS:`}
                            </span>
                            <span className='details main'>
                                <span>{renderTokenAmount(balanceIcons)}</span>
                                <p className={dropdown ? "active" : ""}><Arrow color='white' /></p>
                            </span>
                        </div>
                    </div>

                    {dropdown &&
                        <div className='dropdownContent'>
                            {contractPeriods.map((period, i) => {
                                return <div className={`contract ${i === contract ? "selected" : ""}`} key={window.CONFIG.contracts[i]} onClick={() => {
                                    setDropdown(false);
                                    setContract(i);
                                }}>
                                    <div className='contractDetailsWrapper'>
                                        <span className='label'>
                                            {period} CONTRACT
                                        </span>
                                        <span className='details'>
                                            {formatAddress(window.CONFIG.contracts[i])}
                                        </span>
                                    </div>
                                </div>
                            })}
                        </div>
                    }

                </ul>
            </div>
        </div>
    )
}

export default ContractsDropdown;