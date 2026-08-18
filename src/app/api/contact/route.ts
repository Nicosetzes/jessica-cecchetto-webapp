import React from "react";
import { EmailTemplate } from "@/views/components/layout";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, firstName, lastName, message, reason } = body;

    const reasonMap: Record<string, string> = {
      individual: "Individual Therapy",
      group: "Group Therapy",
      "gender-affirming": "Gender-Affirming Counselling",
      unsure: "Not sure yet",
    };

    const parsedReason = reasonMap[reason] ?? reason;

    const result = await resend.emails.send({
      from: "Jesica Cecchetto Therapy <contact@therapywithjesica.dk>",
      to: "jesicacecchetto@gmail.com",
      subject: `New contact form submission - ${parsedReason}`,
      replyTo: email,
      react: React.createElement(EmailTemplate, {
        email,
        firstName,
        lastName,
        message,
        reason: parsedReason,
      }),
    });

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
