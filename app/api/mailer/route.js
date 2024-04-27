import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req, context) {
  const mailsender = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "avdhoot2550@gmail.com",
      pass: "ekeh ofrk yhyn klsn",
    },
  });
  try {
    // const { event_id } = context.params;
    const { email, name } = await req.json();

    await mailsender.sendMail({
      from: "avdhoot2550@gmail.com",
      to: email,
      subject: "Your Taxi Confirmation (Booking # [MH14BP0051])",
      text: `Congratulations!${name} Your taxi is booked (Booking # [MH14BP0051]). Details inside. 
      
      regards -  RideConnect- 🚕 Welcome to RideConnect - Your Ultimate Mobility Solution! 🛵Need a ride? Whether it's a taxi for a quick trip across town or a convenient rickshaw ride for short distances, RideConnect has you covered! With our user-friendly app, booking your next ride is just a few taps away.

      📱 Easy Booking: Booking a ride with RideConnect is as easy as 1-2-3! Simply open the app, enter your destination, choose your preferred ride option (taxi or rickshaw), and voila! You'll be matched with a nearby driver in no time.
      
      📍 Optimized Mobility: Say goodbye to waiting endlessly for a ride. RideConnect utilizes advanced algorithms to optimize rickshaw mobility, ensuring that you get to your destination quickly and efficiently, especially in busy urban areas or narrow streets where rickshaws excel.`,
    });

    return NextResponse.json(
      { data: { result: "email send sucessfully " } },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
