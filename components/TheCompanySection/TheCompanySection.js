import { useState } from 'react'
// import { motion, AnimateSharedLayout } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'
import cn from 'clsx'
import useCMSContent from '../../utils/hooks/useCMSContent'
import Section from '../Section/Section'
import TheCompanyItem from '../TheCompanyItem/TheCompanyItem'
import styles from './TheCompanySection.module.scss'

const TheCompanySection = () => {
  const { dontRender, data } = useCMSContent('theCompany')
  const [[page, direction], setPage] = useState([0, 0])

  if (dontRender) {
    return null
  }

  const { theCompanyItems, heading } = data?.items?.[0].fields

  const getIndex = at => wrap(0, theCompanyItems.length, at)

  const paginate = newIndex => {
    const dir = newIndex > page ? 1 : -1
    setPage([newIndex, dir])
  }

  return (
    <Section outerClassName={styles.theCompany} heading={heading} slug="/foretaget">
      <nav>
        <ul>
          {theCompanyItems.map((item, i) => (
            <li key={item.sys.id}>
              <button
                className={cn({ [styles.active]: i === page })}
                type="button"
                onClick={() => paginate(i)}
              >
                {item.fields.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <TheCompanyItem direction={direction} item={theCompanyItems[getIndex(page)]} />
    </Section>
  )
}

export default TheCompanySection
