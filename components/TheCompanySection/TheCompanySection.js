import { useState } from 'react'
import useCMSContent from '../../utils/hooks/useCMSContent'
import TheCompanyItem from '../TheCompanyItem/TheCompanyItem'
import SectionHeading from '../SectionHeading/SectionHeading'
import styles from './TheCompanySection.module.scss'

const TheCompanySection = () => {
  const { dontRender, data } = useCMSContent('theCompany')
  const [activeItem, setActiveItem] = useState(null)

  if (dontRender) {
    return null
  }

  const toggleActive = index => {
    const newIndex = activeItem === index ? null : index
    setActiveItem(newIndex)
  }

  const { theCompanyItems, heading } = data?.items?.[0].fields

  return (
    <section className={styles.theCompany}>
      <SectionHeading>{heading}</SectionHeading>
      <div className={styles.inner}>
        <dl>
          {theCompanyItems.map((item, i) => (
            <TheCompanyItem
              key={item.sys.id}
              item={item}
              i={i}
              activeItem={activeItem}
              toggleActive={toggleActive}
            />
          ))}
        </dl>
      </div>
    </section>
  )
}

export default TheCompanySection
