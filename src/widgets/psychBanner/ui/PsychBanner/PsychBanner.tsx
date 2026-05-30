import { Banner } from "../../../../shared/ui/Banner"
import { AppButton } from "../../../../shared/ui/Button"
import { age, experience, header, img, jobs, label, name, tags } from "../../model/const"
import styles from './PsychBanner.module.scss'
import cl from 'classnames'

export const PsychBanner = () => {
  return (
    <Banner className={styles.banner}>
      <div className={styles.tagsContainer}>
        {tags.map(tag => (
          <div className={styles.tag}>
            <p>{tag.img}</p>
            <p className="small">{tag.title}</p>
          </div>
        ))}
      </div>
      <div className={styles.top}>
        <img src={img} alt="Фото девушки"/>
        <h3 className="large">{name}</h3>
        <p className={cl("large", styles.label)}>{label}</p>
        <div className={styles.info}>
          <p>{experience}</p>
          <div className={styles.circle}/>
          <p>{age}</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <ul>
          <p className="large">{header}</p>
          {jobs.map(item => (
            <li><p>{item}</p></li>
          ))}
        </ul>
        <AppButton variant="filled">Подробнее</AppButton>
      </div>
    </Banner>
  )
}