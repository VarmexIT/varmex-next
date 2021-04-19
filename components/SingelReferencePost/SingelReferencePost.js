import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import ReferenceList from '../ReferenceList/ReferenceList'
import styles from './SingelReferencePost.styles'

const SingelReferencePost = ({ post, referenceItems }) => {
  if (!post) {
    return null
  }

  return (
    <styles.singleReferencePost noGutter>
      <div className="singelReferencePost">
        <img src={post.image.fields.file.url} alt={post.image.fields.title} />
        <styles.content>
          <h1>{post.title}</h1>
          {documentToReactComponents(post.body)}
        </styles.content>
      </div>

      <hr />
      <ReferenceList referenceItems={referenceItems} />
    </styles.singleReferencePost>
  )
}

export default SingelReferencePost
