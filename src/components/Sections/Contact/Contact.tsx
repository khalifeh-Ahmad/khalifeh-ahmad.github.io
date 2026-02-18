import React, { useState } from "react";
import styles from "./Contact.module.css";
import { profileData } from "../../../data/portfolio";
import ResumeDownload from "../../Features/ResumeDownload/ResumeDownload";
import emailjs from "@emailjs/browser";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  // Real-time validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    if (name.trim().length > 50) return "Name must be less than 50 characters";
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email";
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) return "Message is required";
    if (message.trim().length < 10)
      return "Message must be at least 10 characters";
    if (message.trim().length > 1000)
      return "Message must be less than 1000 characters";
    return undefined;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time validation
    if (touched[name]) {
      let error: string | undefined;
      if (name === "name") error = validateName(value);
      if (name === "email") error = validateEmail(value);
      if (name === "message") error = validateMessage(value);

      setErrors({ ...errors, [name]: error });
    }
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });

    // Validate on blur
    let error: string | undefined;
    if (field === "name") error = validateName(formData.name);
    if (field === "email") error = validateEmail(formData.email);
    if (field === "message") error = validateMessage(formData.message);

    setErrors({ ...errors, [field]: error });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({ name: true, email: true, message: true });

    // Validate all fields
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);

    const newErrors: FormErrors = {
      name: nameError,
      email: emailError,
      message: messageError,
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (nameError || emailError || messageError) {
      setStatus("error");
      setSubmitMessage("Please fix the errors before submitting");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    // Submit form
    setStatus("loading");

    try {
  
      await emailjs.send(
        "service_83gau4g", 
        "template_oltus6u", 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: profileData.name,
        },
        "j6S32c6rvpjCOYm2p"
      );

      setStatus("success");
      setSubmitMessage("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setTouched({});
      setErrors({});

      // Reset after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setSubmitMessage("");
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setSubmitMessage(
        "Failed to send message. Please try again or email me directly."
      );
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const getFieldClassName = (field: keyof FormErrors) => {
    const baseClass = styles.formGroup;
    if (!touched[field]) return baseClass;
    if (errors[field]) return `${baseClass} ${styles.error}`;
    if (formData[field] && !errors[field])
      return `${baseClass} ${styles.success}`;
    return baseClass;
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <p className={styles.subtitle}>
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>

        <div className={styles.content}>
          {/* Contact Information - unchanged */}
          <div className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Contact Information</h3>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <h4>Phone</h4>
                <a href={`tel:${profileData.phone}`}>{profileData.phone}</a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4>Location</h4>
                <p>{profileData.location}</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div>
                <h4>LinkedIn</h4>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Email"
                className={styles.socialLink}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={styles.socialLink}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              <a
                href={`${profileData.github}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                className={styles.socialLink}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>

              <a
                href={`tel:${profileData.phone}`}
                aria-label="Phone"
                className={styles.socialLink}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
            </div>

            <div className={styles.resumeDownload}>
              <div className={styles.divider}></div>
              <h4 className={styles.resumeTitle}>Need My Full Resume?</h4>
              <ResumeDownload variant="primary" size="medium" />
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {/* Name Field */}
            <div className={getFieldClassName("name")}>
              <label htmlFor="name">
                Your Name
                <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur("name")}
                  placeholder="John Doe"
                  className={
                    errors.name && touched.name ? styles.inputError : ""
                  }
                  disabled={status === "loading"}
                />
                {touched.name && !errors.name && formData.name && (
                  <span className={styles.successIcon}>✓</span>
                )}
                {touched.name && errors.name && (
                  <span className={styles.errorIcon}>✕</span>
                )}
              </div>
              {touched.name && errors.name && (
                <span className={styles.errorMessage}>{errors.name}</span>
              )}
            </div>

            {/* Email Field */}
            <div className={getFieldClassName("email")}>
              <label htmlFor="email">
                Your Email
                <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur("email")}
                  placeholder="john@example.com"
                  className={
                    errors.email && touched.email ? styles.inputError : ""
                  }
                  disabled={status === "loading"}
                />
                {touched.email && !errors.email && formData.email && (
                  <span className={styles.successIcon}>✓</span>
                )}
                {touched.email && errors.email && (
                  <span className={styles.errorIcon}>✕</span>
                )}
              </div>
              {touched.email && errors.email && (
                <span className={styles.errorMessage}>{errors.email}</span>
              )}
            </div>

            {/* Message Field */}
            <div className={getFieldClassName("message")}>
              <label htmlFor="message">
                Your Message
                <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur("message")}
                  rows={6}
                  placeholder="Tell me about your project..."
                  className={
                    errors.message && touched.message ? styles.inputError : ""
                  }
                  disabled={status === "loading"}
                />
                <span className={styles.charCount}>
                  {formData.message.length} / 1000
                </span>
              </div>
              {touched.message && errors.message && (
                <span className={styles.errorMessage}>{errors.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`${styles.submitBtn} ${
                status === "loading" ? styles.loading : ""
              } ${status === "success" ? styles.successBtn : ""} ${
                status === "error" ? styles.errorBtn : ""
              }`}
              disabled={status === "loading"}
            >
              {status === "loading" && (
                <>
                  <div className={styles.spinner}></div>
                  Sending...
                </>
              )}
              {status === "success" && (
                <>
                  <span className={styles.successIconBtn}>✓</span>
                  Message Sent!
                </>
              )}
              {status === "error" && (
                <>
                  <span className={styles.errorIconBtn}>✕</span>
                  Try Again
                </>
              )}
              {status === "idle" && (
                <>
                  Send Message
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </>
              )}
            </button>

            {/* Status Message */}
            {submitMessage && (
              <div
                className={`${styles.statusMessage} ${
                  status === "success"
                    ? styles.statusSuccess
                    : styles.statusError
                }`}
              >
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
