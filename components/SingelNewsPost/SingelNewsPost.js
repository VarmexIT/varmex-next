import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import NewsList from '../NewsList/NewsList'
import styles from './SingelNewsPost.styles'

const SingelNewsPost = ({ post, newsItems }) => {
  if (!post) {
    return null
  }

  return (
    <styles.singelNewsPost noGutter>
      <article className="singelNewsPost">
        <img src={post.image.fields.file.url} alt={post.image.fields.title} />
        <styles.content>
          <h1>{post.title}</h1>
          {documentToReactComponents(post.body)}

          <div className="meta">
            <p>Mattias Eriksson</p>
          </div>
        </styles.content>
      </article>

      <hr />
      <NewsList newsItems={newsItems} />
    </styles.singelNewsPost>
  )
}

export default SingelNewsPost
