import dynamic from 'next/dynamic'
import useCMSContent from '../../hooks/useCMSContent'
import styles from './Varmehandbok.styles'

const Varmehandbok = () => {
  const { dontRender, data } = useCMSContent('varmehandbok')
  const varmehandbok = data?.items?.[0]?.fields

  const ReactReader = dynamic(() => import('react-reader').then(res => res.ReactReader), {
    ssr: false,
  })

  if (dontRender) {
    return null
  }

  return (
    <styles.varmehandbok noGutter>
      <img
        src={varmehandbok.image.fields.file.url}
        alt="Kvinna som sitter bekvämt i en fåtölj och dricker kaffe"
      />
      <div
        style={{
          position: 'relative',
          height: '700px',
        }}
      >
        <ReactReader url={varmehandbok.epubFile.fields.file.url} showToc={false} />
      </div>
    </styles.varmehandbok>
  )
}

export default Varmehandbok
