"use server";

import { Resend } from "resend";
import QuoteRequestEmail from "../emails/quote-request";

export async function sendEmail(formData) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const formattedService = formData.service
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    const subject = `New Quote Request: ${formattedService} for ${formData.bikeType}`;

    const { data, error } = await resend.emails.send({
      from: "Quote Request <noreply@replipainting.com>",
      to: ["replipainting5@gmail.com"],
      subject: subject,
      react: QuoteRequestEmail(formData),
      reply_to: formData.email,
    });

    if (error) {
      console.error("Error sending email:", error);
      return {
        success: false,
        message: "Failed to send your message. Please try again.",
      };
    }

    return {
      success: true,
      message: "Thank you for your inquiry! We'll get back to you soon.",
    };
  } catch (error) {
    console.error("Error in sendEmail:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
