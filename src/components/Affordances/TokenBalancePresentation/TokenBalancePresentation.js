import { Fragment } from "react";
import '../../../styles/components/_inherit.scss';
import { useGlobalContext } from '../../../hooks/useGlobalContext';
import CurrentNetwork from '../CurrentNetwork/CurrentNetwork';
import { renderTokenAmount } from '../../../helpers/stringRenderOperations';
import { useState } from "react";

const TokenBalancePresentation = () => {
    const [dropdown, onDropdown] = useState(false);
    const { balanceTokSportsIconTokens, userWallet } = useGlobalContext();
    return (
        userWallet &&
        <div className='networkAndTokens'>
            <div>
                <CurrentNetwork />
                <ul className="dropdown">
                    <div className='contractTokens'>
                        <div className='contractTokensWrapper'>
                            <span className='label'>
                                PRE-SEED $ICONS:
                            </span>
                            <span className='amount'>
                                {renderTokenAmount(balanceTokSportsIconTokens)}
                                <button className="btnDropdown" onClick={() => onDropdown(!dropdown)}>click</button>
                            </span>
                        </div>

                    </div>

                    {dropdown &&
                        <div>
                            <div className='contractTokens content'>
                                <div className='contractTokensWrapper'>
                                    <span className='label'>
                                        SEED $ICONS:
                                    </span>
                                    <span className='amount'>
                                        {renderTokenAmount(balanceTokSportsIconTokens)}
                                    </span>
                                </div>
                            </div>
                            <div className='contractTokens content'>
                                <div className='contractTokensWrapper'>
                                    <span className='label'>
                                        SEED $ICONS:
                                    </span>
                                    <span className='amount'>
                                        {renderTokenAmount(balanceTokSportsIconTokens)}
                                    </span>
                                </div>
                            </div>
                            <div className='contractTokens content'>
                                <div className='contractTokensWrapper'>
                                    <span className='label'>
                                        SEED $ICONS:
                                    </span>
                                    <span className='amount'>
                                        {renderTokenAmount(balanceTokSportsIconTokens)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    }

                </ul>
            </div>
        </div>
    )
}

export default TokenBalancePresentation;