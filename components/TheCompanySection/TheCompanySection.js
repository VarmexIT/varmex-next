import { useState } from 'react'
import { wrap } from '@popmotion/popcorn'
import cn from 'clsx'
import useCMSContent from '../../hooks/useCMSContent'
import TheCompanyItem from '../TheCompanyItem/TheCompanyItem'
import styles from './TheCompanySection.styles'

const TheCompanySection = () => {
  const { dontRender, data } = useCMSContent('theCompany')
  const [[page, direction], setPage] = useState([0, 0])

  if (dontRender) {
    return null
  }

  const { theCompanyItems } = data?.items?.[0].fields

  const getIndex = at => wrap(0, theCompanyItems.length, at)

  const paginate = newIndex => {
    const dir = newIndex > page ? 1 : -1
    setPage([newIndex, dir])
  }

  return (
    <styles.theCompanySection slug="foretaget">
      <nav>
        <ul>
          {theCompanyItems.map((item, i) => (
            <li key={item.sys.id}>
              <button
                className={cn({ active: i === page })}
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
    </styles.theCompanySection>
  )
}

export default TheCompanySection
