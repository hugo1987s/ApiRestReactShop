import nodemailer  from 'nodemailer'

const SendMail = (req, res) => {
    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: req.body.emailUser, 
            pass: req.body.emailPassword 
        }
    })

    // Message object
    let message = {
        from: req.body.emailFrom, 
        to: req.body.emailTo, 
        subject: req.body.emailSubject,
        text: req.body.emailText, 
        html: req.body.emailHtml 
    }

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message)
            res.status(500).send({'message': `Could not send e-mail from ${req.body.emailFrom} to ${req.body.emailTo}`})
        }
    })

    res.status(200).send({'message': `e-mail sent, from ${req.body.emailFrom} to ${req.body.emailTo}`})
}

export default {
    SendMail
}