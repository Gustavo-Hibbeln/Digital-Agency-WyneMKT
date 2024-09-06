const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "wyneagenciamktdigital@gmail.com",
        pass: "cyoj jbgm gxkt fwwo ",
    },
});

let options = {
    from: 'wyneagenciamktdigital@gmail.com',
    to: 'hibbeln82@gmail.com', //VARIAVEL
    subject: 'Olá ....',
    text: 'Oi tudo bem com você ...? Espero que sim, você entrou em contato com a nossa agência de marketing digital!'
}

const sendEmail = async() => {
    try{
        console.log(`Enviando email`)
        await transporter.sendMail(options);
        console.log(`Email enviado com sucesso!`)
        process.exit()
    } catch (error) {
        console.log(`Erro ao enviar email`)
        console.log(error)
    }
}

sendEmail()