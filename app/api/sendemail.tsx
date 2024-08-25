// import type { NextApiRequest, NextApiResponse } from 'next';

// // Define the expected data type
// type Data = {
//   message: string;
// };

// export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
//   if (req.method === 'POST') {
//     const { name, email, message } = req.body;

//     try {
//       // Example: Replace this with your actual email sending logic
//       // await sendEmail({ to: 'your-email@example.com', subject: 'New Contact Message', text: `From: ${name}\nEmail: ${email}\nMessage: ${message}` });

//       // Respond with success
//       res.status(200).json({ message: 'Message sent successfully!' });
//     } catch (error) {
//       // Respond with error
//       res.status(500).json({ message: 'There was an error sending your message.' });
//     }
//   } else {
//     // Handle any other HTTP method
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// import { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'POST') {
//     const { name, email, message } = req.body;

//     // Create a transporter
//     const transporter = nodemailer.createTransport({
//       // service: 'gmail', // Example: Gmail service
//       host: process.env.SMTP_SERVER, // Make sure to use the correct SMTP server
//       port: Number(process.env.SMTP_PORT) || 587,
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Setup email options
//     const mailOptions = {
//       from: email,
//       to: 'your-email@gmail.com',
//       subject: `New message from ${name}`,
//       text: message,
//     };

//     try {
//       // Send email
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ success: false });
//     }
//   } else {
//     res.status(405).json({ message: 'Only POST requests are allowed' });
//   }
// }
// pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SERVER, // Make sure to use the correct SMTP server
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your email user from .env.local
        pass: process.env.EMAIL_PASSWORD, // Your email password from .env.local
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: `"${name}" <${process.env.EMAIL_USER}>`, // sender address
        to: "areebabano986@gmail.com", // list of receivers
        subject: "New Contact Form Message", // Subject line
        text: message, // plain text body
        html: `<p>You have a new contact form submission:</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`, // HTML body content
      });

      res.status(200).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "An error occurred while sending your message." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
