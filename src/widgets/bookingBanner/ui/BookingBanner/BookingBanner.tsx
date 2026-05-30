import { Banner } from "../../../../shared/ui/Banner"
import styles from './BookingBanner.module.scss'
import BookingImg from '../../../../assets/booking.png'
import { description, title } from "../../model/const"
import { AppButton } from "../../../../shared/ui/Button"

export const BookingBanner = () => {
  return (
    <Banner className={styles.bookingBanner}>
      <img src={BookingImg} alt="Счастливые люди смотрят в телефон"/>
      <p className="large">{title}</p>
      <p>{description}</p>
      <AppButton variant="filled">Подробнее</AppButton>
    </Banner>
  )
}