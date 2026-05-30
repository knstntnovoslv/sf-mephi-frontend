import { bottom, col1, col2, mail } from '../../model/const'
import styles from './Footer.module.scss'
import FooterIcon from '../../../../assets/footer.svg'
import PartIcon from '../../../../assets/participant.svg'
import Vk from '../../../../assets/vk.svg'
import Tg from '../../../../assets/tg.svg'
import Twit from '../../../../assets/twit.svg'
import Dzen from '../../../../assets/dzen.svg'
import Send from '../../../../assets/send.svg'
import cl from 'classnames'
import { AppButton } from '../../../../shared/ui/Button'

export const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.col}>
          {col1.map(item => <p className='large'>{item}</p>)}
        </div>
        <div className={styles.col}>
          {col2.map(item => <p className='large'>{item}</p>)}
        </div>
        <div className={styles.mail}>
          <h3>{mail.title}</h3>
          <div className={styles.row}>
            <input placeholder='Ваш e-mail'/>
            <AppButton variant="filled">
              <img src={Send}/>
            </AppButton>
          </div>
          <p className={cl("small", styles.hint)}>{mail.hint}</p>
        </div>
        <div className={styles.links}>
          <div className={styles.row}>
            <img src={FooterIcon}/>
            <img src={PartIcon}/>
          </div>
          <div className={styles.row}>
            <img src={Vk}/>
            <img src={Tg}/>
            <img src={Twit}/>
            <img src={Dzen}/>
          </div>
        </div>
      </div>
      <hr className={styles.hr}/>
      <div className={styles.bottom}>
        {bottom.map(item => <p className='small'>{item}</p>)}
      </div>
    </footer>
  )
}