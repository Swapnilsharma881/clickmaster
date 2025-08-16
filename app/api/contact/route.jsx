import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, contactNumber, projectType, message } = await req.json();

  // Setup transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // inquiry.clickkmaster@gmail.com
      pass: process.env.GMAIL_PASS, // your 16-character App Password
    },
  });

  // Email to YOU (owner)
  const ownerMailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.GMAIL_USER,
    subject: `New Inquiry: ${projectType || "General"}`,
    text: `
📩 New inquiry received:

Name: ${name}
Phone: ${contactNumber}
Email: ${email}
Project Type: ${projectType}
Message:
${message}
    `,
  };

  // Welcome email to SENDER (visitor)
  const senderMailOptions = {
    from: `"Clickkmaster Photography" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "Thanks for reaching out to Clickkmaster 📸",
    text: `
Hi ${name},

Thank you for getting in touch with Clickkmaster!

We’re excited to hear about your interest in our photography services — whether it’s food, product, branding, or something unique, we’re here to make it shine.

We've received your inquiry and will get back to you shortly.

In the meantime, feel free to explore our work or follow us on Instagram to stay inspired!

📷 Instagram: https://instagram.com/clickkmaster

Talk soon,  
– The Clickkmaster Team
    `,
  };

  try {
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(senderMailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
