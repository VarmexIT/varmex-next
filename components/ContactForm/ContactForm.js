import { Formik, Form, Field, ErrorMessage } from 'formik'
import cn from 'clsx'
import * as Yup from 'yup'
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

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, `Fältet behöver innehålla minst 2 bokstäver`)
      .max(50, `Fältet kan innehålla max 50 bokstäver`)
      .required('Fältet får inte vara tomt'),
    phone: Yup.string().required('Fältet får inte vara tomt'),
    email: Yup.string().email(`Fältet är inte giltigt`).required('Fältet får inte vara tomt'),
    subject: Yup.string().required('Fältet får inte vara tomt'),
    message: Yup.string().required('Fältet får inte vara tomt'),
  })

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
      validationSchema={validationSchema}
    >
      {({ errors, touched, isSubmitting, isValid }) => (
        <Form className={styles.contactForm}>
          <label htmlFor="name">
            <InnerLabel label={labels.contactFormLabelName} name="name" />
            <FormField touched={touched} errors={errors} type="text" name="name" id="name" />
          </label>
          <label htmlFor="phone">
            <InnerLabel label={labels.contactFormLabelPhone} name="phone" />
            <FormField touched={touched} errors={errors} type="text" name="phone" id="phone" />
          </label>
          <label htmlFor="email">
            <InnerLabel label={labels.contactFormLabelEmail} name="email" />
            <FormField touched={touched} errors={errors} type="text" name="email" id="email" />
          </label>
          <label htmlFor="subject">
            <InnerLabel label={labels.contactFormLabelSubject} name="subject" />
            <FormField touched={touched} errors={errors} type="text" name="subject" id="subject" />
          </label>
          <label htmlFor="message" className={styles.messageLabel}>
            <InnerLabel label={labels.contactFormLabelMessage} name="message" />
            <FormField
              touched={touched}
              errors={errors}
              as="textarea"
              name="message"
              id="message"
            />
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn({ [styles.loading]: isSubmitting })}
          >
            {isValid && <Spinner className={styles.spinner} show={isSubmitting} />}
            {labels.contactFormLabelSend}
          </button>
        </Form>
      )}
    </Formik>
  )
}

const InnerLabel = ({ label, name }) => (
  <span className={styles.innerLabel}>
    <span>{label}</span>
    <ErrorMessage name={name}>{err => <span className={styles.error}>({err})</span>}</ErrorMessage>
  </span>
)

const FormField = ({ errors, touched, name, ...restProps }) => {
  return (
    <Field
      className={cn({
        [styles.error]: touched?.[name] && errors?.[name],
      })}
      name={name}
      {...restProps}
    />
  )
}

export default ContactForm
