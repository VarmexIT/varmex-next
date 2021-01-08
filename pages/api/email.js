import Mailgun from 'mailgun-js'

const handler = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(404).send()
  }

  const isDev = process.env.NODE_ENV === 'development'

  const { name, phone, email, subject, message } = JSON.parse(req.body)
  const mailgun = Mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: 'mg.varmex.se',
  })

  const data = {
    from: 'hemsidan@varmex.se',
    to: isDev ? 'christian.alares@gmail.com' : 'info@varmex.se',
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

  mailgun.messages().send(data, error => {
    if (error) {
      res.status(error.statusCode || 500).json({ success: false, error })
    } else {
      res.status(200).json({ success: true })
    }
  })
}

export default handler
