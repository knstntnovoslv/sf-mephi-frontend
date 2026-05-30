import styles from './Tag.module.scss'

export interface TagProps {
  icon?: string
  title: string
  active?: boolean
}

export const Tag = (props: TagProps) => {
  const {title, icon, active} = props
  return (
    <span className={styles.tag} style={{borderColor: active ? "#16C8BB" : undefined}}>
      {icon && <img src={icon}/>}
      {title}
    </span>
  )
}