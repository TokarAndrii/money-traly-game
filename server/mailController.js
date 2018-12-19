
const nodemailer = require('nodemailer');
const mailOptions = {
    from: "tokar.andrii@gmail.com",
    to: "tokar.andrii@ecomm.kiev.ua",
    subject: "",
    text: "",
};

module.exports = {
    getEmailCredentialsFromFront(req, res, next) {
        console.log(req.body, ' - getEmailCredentialsFromFront req.body')
        const { user, email, subject, message } = req.body;

        mailOptions.subject = subject;

        mailOptions.text = `message: ${message}, from: ${user}, email: ${email}`;

        const transport = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: "tokar.andrii@gmail.com",
                pass: 'Alisa1211'
            }
        });

        if (mailOptions.text !== "") {
            console.log('send mail ...')
            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
            });
        }

        next();

    },






    sendAnswerToFront(req, res, next) {
        res.status(200);
        res.send('Ok');
    }
}