const nodemailer = require('nodemailer');
const { google } = require('googleapis');
require('dotenv').config();




exports.sendEmail = async (req, res) => {
    // try {
    //     const output = `
    //         <p>You have a contact message request</p>
    //         <h3>Contact Details</h3>
    //         <ul>
    //             <li>Name: ${req.body.name}</li>
    //             <li>Company: ${req.body.company}</li>
    //             <li>Email: ${req.body.email}</li>
    //             <li>Phone: ${req.body.phone}</li>
    //         </ul>
    //         <h3>Message</h3>
    //         <p>${req.body.message}</p>
    //     `;

    //     // const accessToken = await oAuth2Client.getAccessToken();

    //     // return accessToken;

    //     let transporter = nodemailer.createTransport({
    //         // host: "smtp.gmail.com",
    //         // port: 465, //587
    //         // secure: true, // true for 465, false for other ports
    //         services: "gmail",
    //         auth: {
    //             type: 'OAuth2',
    //             user: process.env.EMAIL, // generated ethereal user
    //             // pass: process.env.PASSWORD, // generated ethereal password
    //             clientId: process.env.OAUTH2_CLIENTID,
    //             clientSecret: process.env.OAUTH2_CLIENT_SECRET,
    //             refreshToken: process.env.OAUTH2_REFRESH_TOKEN,
    //             accessToken: accessToken
    //         },
    //         // tls:{
    //         //     rejectUnauthorized:false
    //         // }
    //     });


    //     let mailOptions = {
    //         from: '"Dev Tester 👻" <devtestar101@gmail.com>', // sender address
    //         to: "devtestar101@gmail.com", // list of receivers
    //         subject: "Message From Contact Endpoint", // Subject line
    //         //text: "Hello world?", // plain text body
    //         html: output, // html body
    //     };

    //     const result = await transporter.sendMail(mailOptions)

    //     return result;

    // } catch (error) {
    //     return error;
    // }

    // const oAuth2Client = new google.auth.OAuth2(process.env.OAUTH2_CLIENTID, process.env.OAUTH2_CLIENT_SECRET, process.env.OAUTH2_REDIRECT_URI);

    // oAuth2Client.setCredentials({ refresh_token:process.env.OAUTH2_REFRESH_TOKEN });

    // const accessToken = await oAuth2Client.getAccessToken((err, token) => {
    //     if (err) {
    //         return err
    //     } else {
    //         return token
    //     }
    // });

    const output = `
        <p>You have a contact message request</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Company: ${req.body.company}</li>
            <li>Email: ${req.body.email}</li>
            <li>Phone: ${req.body.phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;

    //create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        // host: "smtp.gmail.com",
        // port: 465, //587
        // secure: true, // true for 465, false for other ports
        service: "gmail",
        auth: {
            // type: 'OAuth2',
            user: 'devtestar101@gmail.com', // generated ethereal user
            pass: 'gqjcgtbtzwuelmiq', // generated ethereal password
            // clientId: process.env.OAUTH2_CLIENTID,
            // clientSecret: process.env.OAUTH2_CLIENT_SECRET,
            // refreshToken: process.env.OAUTH2_REFRESH_TOKEN,
            // accessToken:accessToken
        },
        // tls:{
        //     rejectUnauthorized:false
        // }
    });

    //send mail with defined transport object
    let mailOptions = {
        from: '"Dev Tester 👻" <devtestar101@gmail.com>', // sender address
        to: "writetojoseph1@gmail.com", // list of receivers
        subject: "Message From Contact Endpoint", // Subject line
        //text: "Hello world?", // plain text body
        html: output, // html body
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if(err) {
            console.log('An error occurred', err)
        } else {
            console.log('Mail sent successfully');
        }
    })
}