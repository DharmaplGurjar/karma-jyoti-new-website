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
        
          from:'karmajyoti@gmail.com',
          to:'meelamit354@gmail.com',
          subject: `Karma Jyoti: Issue Notification from Student - ${name} and subject is - ${subject}`,
          html:`
            <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; background-color: #f4f4f4;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                <h1 style="color: #333;">Notification Regarding Karma Jyoti Issue</h1>
                <p style="font-size: 16px; color: #555;">This message is sent to notify you of a new issue reported by a student. Please find the details below:</p>
                <hr style="border: 1px solid #ddd;">
                <p style="font-size: 16px; color: #333;"><strong>Student Name:</strong> ${name}</p>
                <p style="font-size: 16px; color: #333;"><strong>Mobile Number:</strong> ${mobile}</p>
                <p style="font-size: 16px; color: #333;"><strong>Message:</strong></p>
                <p style="font-size: 16px; color: #555; border-left: 4px solid #eee; padding-left: 10px;">${message}</p>
                <hr style="border: 1px solid #ddd;">
                <p style="font-size: 14px; color: #777;">If you have any questions, please contact us at <a href="mailto:karmajyoti@gmail.com">karmajyoti@gmail.com</a>.</p>
              </div>
            </div>
          `
        }
        
      

      const info = await transporter.sendMail(mailOptions);
    //   console.log('Email sent: ', info.response);

      return NextResponse.json({ message: 'Email sent successfully' },{status:200})
    } catch (err) {
      console.error('Error sending email:', err);
      return NextResponse.json({ err: 'Email Not Send!!' },{status:500})
    }

    
  
}
