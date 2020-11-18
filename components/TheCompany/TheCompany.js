import { useState } from 'react'
import useCMSContent from '../../utils/hooks/useCMSContent'
import CompanyItem from '../CompanyItem/CompanyItem'
import styles from './TheCompany.module.scss'

const TheCompany = () => {
  const { dontRender, data } = useCMSContent('theCompany')
  const [activeItem, setActiveItem] = useState(0)
  const companyItems = data?.items?.[0].fields?.companyItems

  if (dontRender) {
    return null
  }

  const toggleActive = index => {
    const newIndex = activeItem === index ? null : index
    setActiveItem(newIndex)
  }

  return (
    <div className={styles.theCompany}>
      <dl>
        {companyItems.map((item, i) => (
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
  )
}

export default TheCompany
