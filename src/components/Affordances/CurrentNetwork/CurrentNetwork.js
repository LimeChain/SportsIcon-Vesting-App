import '../../../styles/components/_inherit.scss';
import { useGlobalContext } from '../../../hooks/useGlobalContext';
import { formatNetworkName } from '../../../helpers/stringRenderOperations';

const CurrentNetwork = () => {
  const { network } = useGlobalContext();
  return (
    <div className='selectedNetworkWrapper'>
      <div className='selectedNetwork'>
        <span className='networkLabel'>Network</span>
        <span>Ethereum {formatNetworkName(network)}</span>
      </div>
    </div>
  )
}

export default CurrentNetwork;

