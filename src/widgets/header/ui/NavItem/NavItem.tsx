import type { INavItem } from "../../model/types"
import styles from './NavItem.module.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const NavItem = (props: INavItem) => {
  const {title, expand} = props
  return (
    <span className={styles.nav}>
      <p>{title}</p>
      {expand && <ExpandMoreIcon/>}
    </span>
  )
}