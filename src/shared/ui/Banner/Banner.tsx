import type { ComponentProps } from "react"
import styles from './Banner.module.scss'
import cl from 'classnames'

export const Banner = (props: ComponentProps<"div">) => {
  const {className, children, ...args} = props
  return (
    <div className={cl(styles.banner, className)} {...args}>
      {children}
    </div>
  )
}