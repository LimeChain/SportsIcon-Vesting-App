import style from './CurrentNetwork.module.css';
import { useGlobalContext } from '../../../context/GlobalContext';
import { formatNetworkName } from '../../../helpers/StringRenderOperations';

const CurrentNetwork = () => {
  const { userWallet, network } = useGlobalContext();
  return (
    <div className={style['selected-network-wrapper']}>
      { !userWallet ?
        'Network'
        :
        <div className={style['selected-network']}>Ethereum {formatNetworkName(network)}</div>}
    </div>
  )
}

export default CurrentNetwork;