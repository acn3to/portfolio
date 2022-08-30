import nodemailer from 'nodemailer'

export default async (req, res) => {
  const { name, email, message, number } = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_USERNAME,
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
  })

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'costanetoow@gmail.com',
      subject: `Novo formulario de contato do seu portfólio`,
      html: `<h2>Você tem um novo formulário de contato.</h2><br>
      <p><strong>Nome:</strong> ${name}</p><br>
      <p><strong>Número:</strong> ${number}</p><br>
      <p><strong>Email:</strong> ${email}</p><br>
      <p><strong>Mensagem:</strong> ${message}</p><br>`,
    })

    console.log('Mensagem enviada', emailRes.messageId)
  } catch (err) {
    console.log(err)
  }

  res.status(200).json(req.body)
}
