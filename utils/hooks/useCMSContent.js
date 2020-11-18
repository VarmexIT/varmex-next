import { useQuery } from 'react-query'
import { getContentByContentTypeId } from '../../services/cms'

const useCMSContent = contentType => {
  const query = useQuery(contentType, () => getContentByContentTypeId(contentType), {
    refetchOnWindowFocus: false,
  })
  const dontRender = query.status === 'loading' || query.status === 'error'

  return {
    ...query,
    dontRender,
  }
}

export default useCMSContent
