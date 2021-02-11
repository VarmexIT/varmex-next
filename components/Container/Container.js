import React from 'react'
import cn from 'clsx'
import styles from './Container.module.scss'

const Container = ({ className, as: As = 'div', noGutter, children, ...restProps }) => {
  return (
    <As
      className={cn(styles.container, {
        [className]: !!className,
        [styles.noGutter]: !!noGutter,
      })}
      {...restProps}
    >
      {children}
    </As>
  )
}

export default Container
