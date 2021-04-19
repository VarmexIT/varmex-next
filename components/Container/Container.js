import React from 'react'
import cn from 'clsx'
import styles from './Container.styles'

const Container = ({ className, noGutter, children, ...restProps }) => {
  return (
    <styles.container
      className={cn({
        [className]: !!className,
        noGutter: !!noGutter,
      })}
      {...restProps}
    >
      {children}
    </styles.container>
  )
}

export default Container
