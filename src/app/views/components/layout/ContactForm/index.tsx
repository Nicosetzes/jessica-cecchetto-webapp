"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type ContactFormValues, contactFormSchema } from "./schema";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      reason: "",
      message: "",
      privacyConsent: false,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log(data);

    /**
     * FUTURE:
     *
     * await fetch("/api/contact", {
     *   method: "POST",
     *   body: JSON.stringify(data),
     * });
     */

    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="firstName">First name</label>
          <input id="firstName" type="text" {...register("firstName")} />
          {errors.firstName && (
            <span className={styles.error}>{errors.firstName.message}</span>
          )}
        </div>
        <div className={styles.field}>
          <label htmlFor="lastName">Last name</label>
          <input id="lastName" type="text" {...register("lastName")} />
          {errors.lastName && (
            <span className={styles.error}>{errors.lastName.message}</span>
          )}
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="email">Email address</label>
        <input id="email" type="email" {...register("email")} />
        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}
      </div>
      <div className={styles.field}>
        <label htmlFor="reason">Reason for your inquiry</label>
        <select id="reason" {...register("reason")} defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          <option value="individual">Individual Therapy</option>
          <option value="group">Group Therapy</option>
          <option value="gender-affirming">Gender-Affirming Counselling</option>
          <option value="unsure">Not sure yet</option>
        </select>
        {errors.reason && (
          <span className={styles.error}>{errors.reason.message}</span>
        )}
      </div>
      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea id="message" rows={8} {...register("message")} />
        {errors.message && (
          <span className={styles.error}>{errors.message.message}</span>
        )}
      </div>
      <label className={styles.checkbox}>
        <input type="checkbox" {...register("privacyConsent")} />
        <span>
          I understand that this contact form is not intended for sharing
          detailed or urgent personal health information. I acknowledge that any
          personal information I choose to provide, including sensitive personal
          data, will be processed for the purpose of responding to my inquiry in
          accordance with applicable data protection laws, including the GDPR
          and the practice&apos;s{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </span>
      </label>
      {errors.privacyConsent && (
        <span className={styles.error}>{errors.privacyConsent.message}</span>
      )}
      <button
        type="submit"
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
      {isSubmitSuccessful && (
        <p className={styles.success}>
          Your message has been submitted successfully.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
