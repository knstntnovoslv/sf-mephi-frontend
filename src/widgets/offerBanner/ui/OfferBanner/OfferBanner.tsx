import { Banner } from "../../../../shared/ui/Banner"
import styles from './OfferBanner.module.scss'
import Gift1 from '../../../../assets/gift1.png'
import Gift2 from '../../../../assets/gift2.png'
import { description, price, title } from "../../model/const"
import { AppButton } from "../../../../shared/ui/Button"

export const OfferBanner = () => {
  return (
    <Banner className={styles.offerBanner}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p className={styles.price}>{price}</p>
      <AppButton variant="filled">Купить</AppButton>
      <img className={styles.gift1} src={Gift1} alt=""/>
      <img className={styles.gift2} src={Gift2} alt=""/>
    </Banner>
  )
}