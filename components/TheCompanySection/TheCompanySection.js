import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import useCMSContent from '../../hooks/useCMSContent'
import Boilerplate from '../Boilerplate/Boilerplate'
import styles from './TheCompanySection.styles'

const TheCompanySection = () => {
  const { dontRender, data } = useCMSContent('theCompany')

  if (dontRender) {
    return null
  }

  const { fields } = data?.items?.[0]

  return (
    <styles.theCompanySection slug="foretaget" innerClassName="inner">
      <Boilerplate />
      <div className="content">
        <img className="image" src={fields.image.fields.file.url} alt={fields.image.fields.title} />
        <div className="body">{documentToReactComponents(fields.body)}</div>
      </div>
    </styles.theCompanySection>
  )
}

export default TheCompanySection
