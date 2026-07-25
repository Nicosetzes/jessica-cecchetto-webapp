import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters long"),
  lastName: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters long"),
  email: z.email("Please enter a valid email address"),
  reason: z.string().min(1, "Please select a reason for your inquiry"),
  message: z
    .string()
    .trim()
    .min(10, "Please provide a bit more information")
    .max(3000, "Message is too long"),
  privacyConsent: z.boolean().refine((value) => value, {
    message: "You must accept the privacy notice",
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
