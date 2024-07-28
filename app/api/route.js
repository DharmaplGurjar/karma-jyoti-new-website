import nodemailer from 'nodemailer';
import { NextResponse } from "next/server";

export  async function POST(req, res) {
//   console.log("API route hit"); // Debugging log
  
    const {name,mobile,subject,message} = await req.json();
    // console.log("Received data:", name); // Debugging log

    try {
      let transporter = nodemailer.createTransport({
        host: process.env.NODEMAILER_HOST,
        port: 587,
        secure: false,
        auth: {
          user: process.env.NODEMAILER_USER,
          pass: process.env.NODEMAILER_PASS,
        },
      });

      const mailOptions = {
        from: 'amit@123gmail.com',
        to: 'meelamit354@gmail.com',
        subject: subject,
        html: `<p>Name: ${name}</p><p>Mobile: ${mobile}</p><p>Message: ${message}</p>`,
      };

      const info = await transporter.sendMail(mailOptions);
    //   console.log('Email sent: ', info.response);

      return NextResponse.json({ message: 'Email sent successfully' },{status:200})
    } catch (err) {
      console.error('Error sending email:', err);
      return NextResponse.json({ err: 'Email Not Send!!' },{status:500})
    }

    
  
}
