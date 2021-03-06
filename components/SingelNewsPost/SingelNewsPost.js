import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Container from '../Container/Container'
import SectionHeading from '../SectionHeading/SectionHeading'
import NewsList from '../NewsList/NewsList'
import styles from './SingelNewsPost.module.scss'

const SingelNewsPost = ({ post, newsItems }) => {
  return (
    <Container noGutter>
      <article className={styles.singelNewsPost}>
        <img src={post.image.fields.file.url} alt={post.image.fields.title} />
        <div className={styles.content}>
          <h1>{post.title}</h1>
          {documentToReactComponents(post.body)}

          <div className={styles.meta}>
            <p>Mattias Eriksson</p>
          </div>
        </div>
      </article>

      <SectionHeading>Fler nyheter</SectionHeading>
      <NewsList newsItems={newsItems} />
    </Container>
  )
}

export default SingelNewsPost
