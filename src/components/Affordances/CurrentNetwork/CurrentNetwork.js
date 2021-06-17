import '../../../styles/components/_inherit.scss';
import { useGlobalContext } from '../../../context/GlobalContext';
import { formatNetworkName } from '../../../helpers/StringRenderOperations';

const CurrentNetwork = () => {
  const { userWallet, network } = useGlobalContext();
  return (
    <div className='selectedNetworkWrapper'>
      { !userWallet ?
        'Network'
        :
        <div className='selectedNetwork'>Ethereum {formatNetworkName(network)}</div>}
    </div>
  )
}

export default CurrentNetwork;

