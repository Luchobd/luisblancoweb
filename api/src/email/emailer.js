const nodemailer = require("nodemailer");
// const emailTemplate = require("./template");

sendEmail = async ({ name, email, message }) => {
  const config = {
    host: process.env.SERVICE_HOST,
    port: process.env.SERVICE_PORT,
    secure: false,
    auth: {
      user: process.env.SERVICE_USER,
      pass: process.env.SERVICE_PASS,
    },
  };

  const sendMessage = {
    from: process.env.EMAIL_FROM,
    to: email,
    subject: name + " gets in touch " + email,
    html: `
    <html>
    <head>
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap");

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: "Roboto", sans-serif;
        }

        div {
          margin-bottom: 20px;
        }

        .container {
          padding-top: 20px;
          width: 100%;
          height: 100vh;
          background-color: #1e1e1e;
          color: #fff;
          font-family: "Roboto", sans-serif;
        }

        .content {
          background-color: #1e1e1e;
          padding: 20px 0;
          text-align: center;
        }

        .box {
          padding: 20px;
          display: inline-block;
          border: 2px solid #fff;
          border-radius: 10px;
        }

        .title__name {
          color: #fff;
          font-size: 60px;
          font-weight: bold;
          font-family: "Comic Neue", cursive;
          text-align: center;
        }

        .text__email {
          color: #fff;
          font-size: 48px;
          font-weight: bold;
          text-align: center;
        }

        .text__message {
          color: #fff;
          font-size: 24px;
          font-weight: bold;
          text-align: center;
        }
      </style>
    </head>

    <body>
      <main class="container">
        <div class="content">
          <div class="box">
            <div>
              <h1 class="title__name">${name}</h1>
            </div>
            <div style="margin-top: 20px;">
              <p class="text__email">${email}</p>
            </div>
            <div style="margin-top: 20px;">
              <p class="text__message">${message}</p>
            </div>
          </div>
        </div>
      </main>
    </body>
  </html>
`,
  };

  const transporter = nodemailer.createTransport(config);

  const info = await transporter.sendMail(sendMessage);

  // console.log(info);
};

module.exports = { sendEmail };
