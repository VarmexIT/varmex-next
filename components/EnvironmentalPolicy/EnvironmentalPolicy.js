import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Container from '../Container/Container'
import styles from './EnvironmentalPolicy.module.scss'

const EnvironmentalPolicy = ({ environmentalPolicy: { image, title, body } }) => {
  return (
    <Container noGutter>
      <div className={styles.environmentalPolicy}>
        <img src={image.fields.file.url} alt={image.fields.file} />
        <div className={styles.content}>
          <h1>{title}</h1>
          {documentToReactComponents(body)}
        </div>
      </div>
    </Container>
  )
}

export default EnvironmentalPolicy
