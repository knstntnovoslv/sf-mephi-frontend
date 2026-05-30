import { useContext } from 'react'
import { tags } from '../../../../shared/model/const'
import { Tag } from '../../../../shared/ui/Tag/Tag'
import styles from './Filters.module.scss'
import { AppContext } from '../../../../shared/context/AppContext'

export const Filters = () => {
  const {activeFilters} = useContext(AppContext)

  return (
    <div className={styles.filters}>
      {Object.entries(tags).map(([key, tag]) => <Tag active={activeFilters.includes(key)} {...tag}></Tag>)}
    </div>
  )
}