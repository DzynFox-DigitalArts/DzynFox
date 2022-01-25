const sgMail = require('@sendgrid/mail')

exports.handler = async (event, context) => {

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
      };

    // const req = JSON.parse(event.body)
    // const email = req.email
    // const msgContent = req.message

    sgMail.setApiKey('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')
    const msg = {
        to: email, // Change to your recipient
        from: 'graphyyy.markall@gmail.com', // Change to your verified sender
        subject: 'New Query!',
        text: msgContent,
    }

    if (event.httpMethod === "OPTIONS") {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ message: "Successful preflight call." }),
        };
      } else if (event.httpMethod === "POST") {
        const { name } = JSON.parse(event.body);
        return {
          statusCode: 200,
          headers,
          body: 'HELLO TEST',
        };
      }

    // try{
    //     const response = await sgMail.send(msg)
    //     return {
    //         statusCode: 200,
    //         body: "Mail Sent"
    //     }
    // } catch (error) {
    //     return {
    //         statusCode: 500,
    //         body: JSON.stringify(error)
    //     }
    // }
}