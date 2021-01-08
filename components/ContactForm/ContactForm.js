import { Formik, Form, Field } from 'formik'
import cn from 'clsx'
import { postEmail } from '../../services/email'
import Spinner from '../Spinner/Spinner'
import styles from './ContactForm.module.scss'

const ContactForm = ({ labels, setSendStatus }) => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const { success } = await postEmail(values)

    if (success) {
      setSendStatus('success')
      resetForm()
    } else {
      setSendStatus('error')
    }

    setSubmitting(false)
    const delay = success ? 5000 : 8000
    setTimeout(() => setSendStatus(null), delay)
  }

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.contactForm}>
          <label htmlFor="name">
            <span>{labels.contactFormLabelName}</span>
            <Field type="text" name="name" id="name" />
          </label>
          <label htmlFor="phone">
            <span>{labels.contactFormLabelPhone}</span>
            <Field type="text" name="phone" id="phone" />
          </label>
          <label htmlFor="email">
            <span>{labels.contactFormLabelEmail}</span>
            <Field type="text" name="email" id="email" />
          </label>
          <label htmlFor="subject">
            <span>{labels.contactFormLabelSubject}</span>
            <Field type="text" name="subject" id="subject" />
          </label>
          <label htmlFor="message" className={styles.messageLabel}>
            <span>{labels.contactFormLabelMessage}</span>
            <Field as="textarea" name="message" id="message" />
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn({ [styles.loading]: isSubmitting })}
          >
            <Spinner className={styles.spinner} show={isSubmitting} />
            {labels.contactFormLabelSend}
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
