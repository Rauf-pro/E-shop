import styles from './Loader.module.scss';
import loaderImg from '../../assets/loader.gif';



const Loader = () => {
  return  (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src={loaderImg} alt="Loading..." />
      </div>
    </div>
    
  )
}

export default Loader