import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styles from './SingelJobPost.styles'

const SingelJobPost = ({ post }) => {
  if (!post) {
    return null
  }

  return (
    <styles.singelJobPost noGutter>
      <div className="singelJobPost">
        <styles.content>
          <h1>{post.position}</h1>
          {documentToReactComponents(post.body)}
        </styles.content>
      </div>
    </styles.singelJobPost>
  )
}

export default SingelJobPost
