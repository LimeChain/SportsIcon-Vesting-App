import style from './CurrentNetwork.module.css';

const DropdownMenuNetwork = () => {

  return (
    <div  className={style['selected-network-wrapper']}>
      <div className={style['selected-network']}>Ethereum Ropsten</div>
    </div>
  )
}

export default DropdownMenuNetwork