import cn from 'clsx'
import styles from './WithImage.styles'

const WithImage = ({ hAlign, vAlign, placement, children, src, alt, caption, captionAlign }) => {
  return (
    <styles.withImage
      className={cn({
        left: hAlign === 'left',
        right: hAlign === 'right',
        placeTop: placement === 'top',
        vCenter: vAlign === 'center',
      })}
    >
      {children && <div>{children}</div>}
      <figure>
        <img src={`/img/varmehandboken/${src}.jpg`} alt={alt} />
        {caption && (
          <figcaption
            className={cn({
              center: captionAlign === 'center',
            })}
          >
            {caption}
          </figcaption>
        )}
      </figure>
    </styles.withImage>
  )
}

export default WithImage
