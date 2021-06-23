import '../../../styles/components/_inherit.scss';
import { useGlobalContext } from '../../../hooks/useGlobalContext';
import { formatNetworkName } from '../../../helpers/stringRenderOperations';

const CurrentNetwork = () => {
  const { userWallet, network } = useGlobalContext();
  return (
    <div className='selectedNetworkWrapper'>
      { userWallet && <div className='selectedNetwork'>Ethereum {formatNetworkName(network)}</div>}
    </div>
  )
}

export default CurrentNetwork;

