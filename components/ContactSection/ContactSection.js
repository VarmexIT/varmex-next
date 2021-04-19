import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import cn from 'clsx'
import useCMSContent from '../../hooks/useCMSContent'
import ContactForm from '../ContactForm/ContactForm'
import styles from './ContactSection.styles'

const ContactSection = () => {
  const { dontRender: dontRenderSiteSettings, data: dataSiteSettings } = useCMSContent(
    'siteSettings'
  )
  const { dontRender: dontRenderContact, data: dataContact } = useCMSContent('contact')

  const [sendStatus, setSendStatus] = useState(null)

  if (dontRenderSiteSettings || dontRenderContact) {
    return null
  }

  const siteSettings = dataSiteSettings?.items?.[0].fields
  const { contactUsText, ...formLabels } = dataContact?.items?.[0].fields

  return (
    <styles.contactSection innerClassName="inner" slug="kontakt">
      <div className="contactInfo">
        <div className="section">
          <h3>{siteSettings.companyName}</h3>
          <p>
            {siteSettings.phoneNumber}
            <br />
            {siteSettings.emailAddress}
          </p>
        </div>

        <div className="section">{documentToReactComponents(siteSettings.office1)}</div>
        <div className="section">{documentToReactComponents(siteSettings.office2)}</div>
      </div>

      <div className="formDetails">
        <AnimatePresence>
          {sendStatus && (
            <motion.div
              initial={{ y: '-100%', opacity: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0.5 }}
              transition={{
                x: {
                  duration: 0.7,
                },
              }}
              className={cn('notification', {
                success: sendStatus === 'success',
                error: sendStatus === 'error',
              })}
            >
              {sendStatus === 'success' ? (
                <>
                  <h4>Tack för ditt mail!</h4>
                  <p>Vi hör av oss så fort vi kan!</p>
                </>
              ) : (
                <>
                  <h4>Oj! Någonting gick snett!</h4>
                  <p>Prova istället att maila oss på {siteSettings.emailAddress}.</p>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <p className="contactUsText">
          {contactUsText.replace('{telefon}', siteSettings.phoneNumber)}
        </p>
        <ContactForm labels={formLabels} setSendStatus={setSendStatus} />
      </div>
    </styles.contactSection>
  )
}

export default ContactSection
