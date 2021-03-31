import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Container from '../Container/Container'
import ReferenceList from '../ReferenceList/ReferenceList'
import styles from './SingelReferencePost.module.scss'

const SingelReferencePost = ({ post, referenceItems }) => {
  if (!post) {
    return null
  }

  return (
    <Container noGutter>
      <div className={styles.singelReferencePost}>
        <img src={post.image.fields.file.url} alt={post.image.fields.title} />
        <div className={styles.content}>
          <h1>{post.title}</h1>
          {documentToReactComponents(post.body)}
        </div>
      </div>

      <hr />
      <ReferenceList referenceItems={referenceItems} />
    </Container>
  )
}

export default SingelReferencePost
