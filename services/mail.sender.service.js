const nodemailer = require('nodemailer')
const { mail } = require('../config/config')


class MailSender {

    constructor() { 
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            auth: {
                user: mail.GMAIL_ADDRESS,
                pass: mail.GMAIL_PWD
            }
        })
    }

    async send( to, body ) {
        const response = await this.transporter.sendMail({
            from: 'info@elatelierdemariapaca.com',
            subject: 'Compra realizada',
            to,
            html: body
        })
    }   
}

module.exports = new MailSender()