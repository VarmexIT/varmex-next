import { useQuery } from 'react-query'
import { getContentByContentTypeId } from '../../services/cms'

const useCMSContent = contentTypeId => {
  const query = useQuery(contentTypeId, () => getContentByContentTypeId(contentTypeId), {
    refetchOnWindowFocus: false,
  })
  const dontRender = query.status === 'loading' || query.status === 'error'

  return {
    ...query,
    dontRender,
  }
}

export default useCMSContent
