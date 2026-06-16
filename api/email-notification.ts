"use server";

import { Resend } from 'resend';
import type { FormData } from '@/components/contact';

const resend = new Resend(process.env.RESEND_API_KEY);
const ownerMail = process.env.OWNER_MAIL;

export async function sendMail(formData: FormData) {
    try {
        if (!ownerMail) {
            throw new Error("OWNER_MAIL environment variable is not defined in your .env file.");
        }

        const { data, error } = await resend.emails.send({
            from: 'Rumaze Contact Form <onboarding@resend.dev>',
            to: ownerMail,
            subject: `New Request from ${formData.name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
                    <h2 style="color: #333; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Contact Request</h2>
                    <p><strong>Name:</strong> ${formData.name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
                    <p><strong>Budget:</strong> ${formData.budget || 'Not specified'}</p>
                    <div style="margin-top: 20px;">
                        <strong>Message:</strong>
                        <p style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; white-space: pre-wrap; color: #555;">${formData.message}</p>
                    </div>
                </div>
            `
        });

        if (error) {
            console.error("Resend API Error:", error);
            return { success: false, error };
        }

        return { success: true, data };
    } catch (error: any) {
        console.error("Failed to send mail:", error);
        return { success: false, error: error?.message || error };
    }
}
