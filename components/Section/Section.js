import cn from 'clsx'
import { useSection } from '../../contexts/SectionContext'
import SectionHeading from '../SectionHeading/SectionHeading'

const Section = ({
  as: As = 'section',
  innerAs: InnerAs = 'div',
  innerProps = {},
  outerClassName,
  innerClassName,
  heading,
  slug,
  children,
  ...restProps
}) => {
  const { registerSection } = useSection()

  return (
    <As
      ref={ref => registerSection(slug, ref)}
      id={slug}
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
