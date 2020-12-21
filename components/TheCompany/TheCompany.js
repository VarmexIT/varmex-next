import { useState } from 'react'
import useCMSContent from '../../utils/hooks/useCMSContent'
import CompanyItem from '../CompanyItem/CompanyItem'
import SectionHeading from '../SectionHeading/SectionHeading'
import styles from './TheCompany.module.scss'

const TheCompany = () => {
  const { dontRender, data } = useCMSContent('theCompany')
  const [activeItem, setActiveItem] = useState(0)

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
            <CompanyItem
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

export default TheCompany
