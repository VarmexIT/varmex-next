import cn from 'clsx'
import SectionHeading from '../SectionHeading/SectionHeading'

const Section = ({
  as: As = 'section',
  innerAs: InnerAs = 'div',
  innerProps = {},
  outerClassName,
  innerClassName,
  heading,
  children,
  ...restProps
}) => {
  return (
    <As
      className={cn({
        [outerClassName]: !!outerClassName,
      })}
      {...restProps}
    >
      <SectionHeading>{heading}</SectionHeading>
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
