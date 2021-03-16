import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Container from '../Container/Container'
import styles from './SingelJobPost.module.scss'

const SingelJobPost = ({ post }) => {
  if (!post) {
    return null
  }

  return (
    <Container noGutter>
      <div className={styles.singelJobPost}>
        <div className={styles.content}>
          <h1>{post.position}</h1>
          {documentToReactComponents(post.body)}
        </div>
      </div>
    </Container>
  )
}

export default SingelJobPost
