import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import styles from './HeaerContactDetails.module.scss'

const HeaderContactDetails = () => {
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
        href="https://www.linkedin.com/company/värmex-ab"
      >
        <img className={styles.icon} src="/img/linked_in.png" alt="LinkedIn" />
      </a>
    </div>
  )
}

export default HeaderContactDetails
