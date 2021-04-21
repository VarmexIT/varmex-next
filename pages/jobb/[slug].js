import { getContentByContentTypeId, getJobItemBySlug } from '../../services/cms'
import { EnterAnimation, ExitAnimation } from '../../components/PageTransition/PageTransition'
import Layout from '../../components/Layout/Layout'
import SingelJobPost from '../../components/SingelJobPost/SingelJobPost'

const JobItemPage = ({ post }) => {
  return (
    <>
      <EnterAnimation />
      <ExitAnimation />
      <Layout>
        <SingelJobPost post={post} />
      </Layout>
    </>
  )
}

export const getStaticProps = async ({ params }) => {
  const post = await getJobItemBySlug(params.slug)

  return {
    props: {
      post: post.fields,
    },
  }
}

export const getStaticPaths = async () => {
  const jobItems = await getContentByContentTypeId('job')

  const paths = jobItems.items.map(post => ({
    params: {
      slug: post.fields.slug,
    },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default JobItemPage
