import formData from 'form-data'
import Mailgun from 'mailgun.js'

// Email will be sent to this address if in development mode
const DEV_EMAIL = 'mail@example.com'

const handler = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(404).send()
  }

  const mailgun = new Mailgun(formData)

  const isDev = process.env.NODE_ENV === 'development'

  const { name, phone, email, subject, message } = JSON.parse(req.body)

  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
    url: 'https://api.eu.mailgun.net',
  })

  const data = {
    from: 'hemsidan@varmex.se',
    to: isDev ? [DEV_EMAIL] : ['info@varmex.se'],
    subject,
    text: `
  		Namn: ${name}\n
  		Telefon: ${phone}\n
  		Email: ${email}\n
  		Ämne: ${subject}\n
  		Meddelande:\n
  		${message}
  	`,
    html: `
  		<h2>Meddelande från hemsidan</h2>
  		<ul>
  			<li><strong>Namn:</strong> ${name}</li>
  			<li><strong>Telefon:</strong> ${phone}</li>
  			<li><strong>Email:</strong> ${email}</li>
  			<li><strong>Ämne:</strong> ${subject}</li>
  		</ul>

  		<h3>Meddelande:</h3>
  		<p>
  			${message}
  		</p>
  	`,
  }

  mg.messages
    .create('mg.varmex.se', data)
    .then((/* msg */) => {
      res.status(200).json({ success: true })
    })
    .catch(error => {
      res.status(error.statusCode || 500).json({ success: false, error })
    })
}

export default handler
