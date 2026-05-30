import { AppButton } from "../../../../shared/ui/Button"
import Logo from '../../../../assets/logo.svg'
import styles from './Header.module.scss'
import { navItems } from "../../model/const"
import { NavItem } from "../NavItem/NavItem"
import MenuIcon from '@mui/icons-material/Menu';
import { useWindowWidth } from "../../../../shared/lib/useWindowWidth"
import { BreadCrumbs } from "../../../../features/breadCrumbs/ui/BreadCrumbs"


export const Header = () => {
  const width = useWindowWidth()

  return (
    <header className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={Logo}/>
        </div>
        {width < 1024 &&
          <AppButton variant="clear" className={styles.menuIcon}>
            <MenuIcon />
          </AppButton>
        }
        {width >= 1024 &&
          <>
            <div className={styles.menu}>
              {navItems.map(nav => <NavItem key={nav.title} {...nav}/>)}
            </div>
            <AppButton variant="outlined" className={styles.btn}>
              Подобрать психолога
            </AppButton>
          </>
        }
        <BreadCrumbs className={styles.breadCrumbs}/>
      </div>
    </header>
  )
}