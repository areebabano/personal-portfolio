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

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Example: Gmail service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Setup email options
    const mailOptions = {
      from: email,
      to: 'your-email@gmail.com',
      subject: `New message from ${name}`,
      text: message,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}
