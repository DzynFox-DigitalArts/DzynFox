const sgMail = require('@sendgrid/mail')

exports.handler = async (event, context) => {

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
      };

    if (event.httpMethod === "OPTIONS") {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ message: "Successful preflight call." }),
        };
      } else if (event.httpMethod === "POST") {

        const req = JSON.parse(event.body)
        const msgContent = req.message
        const name = req.name

        sgMail.setApiKey('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')
        const msg = {
          to: "sales@dzynfox.com", // Change to your recipient
          from: 'graphyyy.markall@gmail.com', // Change to your verified sender
          subject: `New Query from ${name}`,
          text: msgContent,
        }

        try{
          const response = await sgMail.send(msg)
          return {
              statusCode: 200,
              body: "Mail Sent"
          }
        } catch (error) {
          return {
              statusCode: 500,
              body: JSON.stringify(error)
          }
        }
      }
}