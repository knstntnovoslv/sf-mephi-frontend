import styles from './CareBanner.module.scss'
import CareBannerImg from '../../../../assets/careBanner.png'
import { Banner } from '../../../../shared/ui/Banner'

export const CareBanner = () => {
  return (
    <Banner className={styles.careBanner}>
      <img src={CareBannerImg} alt='Баннер Дарите заботу'/>
    </Banner>
  )
}