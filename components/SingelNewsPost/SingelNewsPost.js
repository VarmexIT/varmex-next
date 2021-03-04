import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styles from './SingelNewsPost.module.scss'
import Container from '../Container/Container'

const SingelNewsPost = ({ post }) => {
  return (
    <Container>
      <article className={styles.singelNewsPost}>
        <img src={post.image.fields.file.url} alt={post.image.fields.title} />
        <div className={styles.content}>
          <h1>{post.title}</h1>
          {documentToReactComponents(post.body)}
        </div>
      </article>
    </Container>
  )
}

export default SingelNewsPost
