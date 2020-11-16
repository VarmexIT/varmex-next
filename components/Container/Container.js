import React from 'react'
import cn from 'clsx'
import styles from './Container.module.scss'

const Container = ({ className, as = 'div', noGutter, children, ...restProps }) => {
  const C = as

  return (
    <C
      className={cn(styles.container, {
        [className]: !!className,
        [styles.noGutter]: !!noGutter,
      })}
      {...restProps}
    >
      {children}
    </C>
  )
}

export default Container
