function capturarValores(event) {

    event.preventDefault();

    const valorInput1 = document.getElementById('email').value;


    const valorInput2 = document.getElementById('name').value;

    var valorArmazenado1 = valorInput1;
    var valorArmazenado2 = valorInput2;

    console.log("Valor 1 armazenado:", valorArmazenado1);
    console.log("Valor 2 armazenado:", valorArmazenado2);
}

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
    to: valorInput1,
    subject: 'Olá' + valorInput2,
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
