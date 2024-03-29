import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import useCMSContent from '../../hooks/useCMSContent'
import styles from './HeaderContactDetails.styles'

const HeaderContactDetails = () => {
  const { scrollY } = useViewportScroll()
  const detailsOpacity = useTransform(scrollY, [0, 100], [1, 0])
  const yPos = useTransform(scrollY, [0, 100], [0, 78])

  const { dontRender: dontRenderSiteSettings, data: dataSiteSettings } = useCMSContent(
    'siteSettings'
  )

  if (dontRenderSiteSettings) {
    return null
  }

  const { linkedInUrl } = dataSiteSettings?.items?.[0].fields

  return (
    <styles.headerContactDetails
      as={motion.div}
      style={{
        opacity: detailsOpacity,
        y: yPos,
      }}
    >
      <a href="tel:0840012500">
        <FaPhone className="icon" />
        08 - 400 125 00
      </a>
      <a href="mailto:info@varmex.se">
        <MdEmail className="icon" />
        info@varmex.se
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="HeaderContactInfo_linkedIn__1ik7q"
        href={linkedInUrl}
      >
        <img className="icon" src="/img/linked_in_icon.png" alt="LinkedIn" />
      </a>
    </styles.headerContactDetails>
  )
}

export default HeaderContactDetails
