import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import useCMSContent from '../../utils/hooks/useCMSContent'
import styles from './HeaerContactDetails.module.scss'

const HeaderContactDetails = () => {
  const { dontRender: dontRenderSiteSettings, data: dataSiteSettings } = useCMSContent(
    'siteSettings'
  )

  if (dontRenderSiteSettings) {
    return null
  }

  const { linkedInUrl } = dataSiteSettings?.items?.[0].fields

  return (
    <div className={styles.contactDetails}>
      <a href="tel:0840012500">
        <FaPhone className={styles.icon} />
        08 - 400 125 00
      </a>
      <a href="mailto:info@varmex.se">
        <MdEmail className={styles.icon} />
        info@varmex.se
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="HeaderContactInfo_linkedIn__1ik7q"
        href={linkedInUrl}
      >
        <img className={styles.icon} src="/img/linked_in_icon.png" alt="LinkedIn" />
      </a>
    </div>
  )
}

export default HeaderContactDetails
