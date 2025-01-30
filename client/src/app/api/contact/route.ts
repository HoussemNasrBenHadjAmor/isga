import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const config = {
  api: {
    bodyParser: false,
  },
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

interface mailProps {
  username: string;
  email: string;
  subject: string;
  comment: string;
}

// Define the schema for the form data
const FormDataSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  comment: z.string().min(1, { message: "Comment is required" }),
});

const mailForSender = ({ username, email, subject, comment }: mailProps) => {
  const mail = {
    from: process.env.USER,
    to: email,
    subject: subject,
    text: comment,
    html: `
      <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Email Subject</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
  <style>
          body {
            font-family: 'Roboto', sans-serif;
          }
          .container {
              background-color: #ffffff;
              padding: 20px;
          }
          .inside {
            flex-direction: column;
            gap: 20px;
            border: solid 1px #e0e0e0;
            max-width: 576px;
            margin-left: auto;
            margin-right: auto;
            padding: 20px;
            border-radius: 0.375rem;
          }
          .right-div {
            display: inline-block;
          }
          p {
            font-size: 16px;
            line-height: 24px;
          }
          h3 {
            font-size: 20px;
            line-height: 28px;
          }
          span {
            color: #F8719D;
            font-size: 16px;
            line-height: 24px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="inside">
            <img
            src="https://isgaconsult.com/wp-content/uploads/2024/02/988717_689485904413443_2091433604_n-removebg-preview.png"
            alt="logo"
            border="0"
            style="width: 140px;"
             />
         
            <div>
              <hr class="border-bottom: 1px solid; color:rgb(226 232 240);">
            </div>
  
            <div> 
              <h3>
                Your Message has been sended successfully
              </h3>
              <p>
                Hi <span>${username}</span>, ISGA really wants to
                thank you for your time and for reaching us ツ
              </p>
              <p>We will contact you back soon.</p>
              <p>Sincerely<span> ISGA.</span></p>
            </div>
  
            <div>
              <hr class="border-bottom: 1px solid; color:rgb(226 232 240);">
            </div>
  
            <div class="right-div">
              <p>Take care of yourself 🙌</p>
            </div>
          </div>
      </div>
  </body>
  </html>
     `,
  };
  return mail;
};

const mailForMe = ({ username, email, subject, comment }: mailProps) => {
  const mail = {
    from: process.env.USER,
    to: process.env.USER,
    subject: subject,
    text: comment,
    html: `
      <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Email Subject</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
  <style>
          body {
            font-family: 'Roboto', sans-serif;
          }
          .container {
              background-color: #ffffff;
              padding: 20px;
          }
          .inside {
            flex-direction: column;
            gap: 20px;
            border: solid 1px #e0e0e0;
            max-width: 576px;
            margin-left: auto;
            margin-right: auto;
            padding: 20px;
            border-radius: 0.375rem;
          }
          .right-div {
            display: inline-block;
          }
          p {
            font-size: 16px;
            line-height: 24px;
          }
           h3 {
            font-size: 20px;
            line-height: 28px;
          }
          h4 {
            font-size: 18px;
            line-height: 24px;
          }
          span {
            color: #F8719D;
            font-size: 16px;
            line-height: 24px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="inside">
            <img
            src="https://isgaconsult.com/wp-content/uploads/2024/02/988717_689485904413443_2091433604_n-removebg-preview.png"
            alt="logo"
            border="0"
            style="width: 140px;"
             />
         
            <div>
              <hr class="border-bottom: 1px solid; color:rgb(226 232 240);">
            </div>
  
            <div> 
              <p>
                Hi there, <span>${username}</span> has sended you a new message with the email: <span>${email}</span>.
              </p>
              <p>The Message is about: <span>${subject}</span></p>
              <p>${comment}. </p>
            </div>
  
            <div>
              <hr class="border-bottom: 1px solid; color:rgb(226 232 240);">
            </div>
  
            <div class="right-div">
              <p>Take care of yourself boss🙌</p>
            </div>
          </div>
      </div>
  </body>
  </html>`,
  };
  return mail;
};

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // Parse the incoming form data
    const data = await req.formData();

    // Initialize a structured object
    const formData: Record<string, any> = {};

    // Populate the object with form data
    for (const [key, value] of data.entries()) {
      formData[key] = value;
    }

    // Validate the form data using Zod
    const validationResult = FormDataSchema.safeParse(formData);

    // If validation fails, return an error response
    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validationResult.error.errors },
        { status: 400 }
      );
    }

    const { username, subject, email, comment } = validationResult.data;

    const senderMail = mailForSender({ username, email, subject, comment });

    const MeMail = mailForMe({ username, email, subject, comment });

    await Promise.all([
      transporter.sendMail(senderMail),
      transporter.sendMail(MeMail),
    ]);

    return NextResponse.json({ status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
