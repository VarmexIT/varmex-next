import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styles from './EnvironmentalPolicy.styles'

const EnvironmentalPolicy = ({ environmentalPolicy: { image, title, body } }) => {
  return (
    <styles.environmentalPolicy noGutter>
      <div className="environmentalPolicy">
        <img src={image.fields.file.url} alt={image.fields.file} />
        <styles.content>
          <h1>{title}</h1>
          {documentToReactComponents(body)}
        </styles.content>
      </div>
    </styles.environmentalPolicy>
  )
}

export default EnvironmentalPolicy
