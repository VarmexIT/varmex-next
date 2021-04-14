import cn from 'clsx'

const Section = ({
  as: As = 'section',
  innerAs: InnerAs = 'div',
  innerProps = {},
  outerClassName,
  innerClassName,
  slug,
  children,
  ...restProps
}) => {
  return (
    <As
      id={slug}
      className={cn({
        [outerClassName]: !!outerClassName,
      })}
      {...restProps}
    >
      <hr />
      <InnerAs
        className={cn({
          [innerClassName]: !!innerClassName,
        })}
        {...innerProps}
      >
        {children}
      </InnerAs>
    </As>
  )
}

export default Section
