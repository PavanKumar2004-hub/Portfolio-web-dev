import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // In a production setup, this can forward to Web3Forms, Resend, or SendGrid:
    // If WEB3FORMS_KEY is configured in env:
    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3FormsKey) {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name,
            email,
            subject: subject || `Portfolio Contact from ${name}`,
            message,
            from_name: "Portfolio Contact Form",
          }),
        });
      } catch (err) {
        console.error("Web3Forms forward failed:", err);
      }
    }

    // Log the contact message
    console.log(`[Contact Form Received] From: ${name} <${email}> | Subject: ${subject || "No Subject"}`);
    console.log(`Message: ${message}`);

    return NextResponse.json(
      {
        success: true,
        message: `Thank you, ${name}! Your message has been received. Pavan Kumar will get back to you shortly.`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling contact submission:", error);
    return NextResponse.json(
      { error: "Failed to process contact submission. Please try emailing directly." },
      { status: 500 }
    );
  }
}
