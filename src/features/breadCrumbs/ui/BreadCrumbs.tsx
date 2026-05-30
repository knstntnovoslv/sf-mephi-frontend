import { Breadcrumbs } from "@mui/material"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useContext, useMemo, type ComponentProps } from "react";
import { basePath } from "../model/const";
import { AppContext } from "../../../shared/context/AppContext";
import styles from './BreadCrumbs.module.scss'
import clsx from "classnames"
import { Link } from "react-router-dom";

export const BreadCrumbs = (props: ComponentProps<"div">) => {
  const {className, ...args} = props
  const {articleTitle} = useContext(AppContext)
  
  const path = useMemo(() => {
    if (articleTitle) {
      return [...basePath, {title: articleTitle, path: '#'}]
    }

    return basePath
  }, [articleTitle])

  return (
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        className={clsx(className, styles.breadCrumbs)}
        {...args}
      >
        {path.map(item => <Link to={item.path}>{item.title}</Link>)}
      </Breadcrumbs>
  )
}