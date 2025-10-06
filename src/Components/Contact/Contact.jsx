
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";
// import AnimatedBalls from "../AnimateSkill/AnimatedBalls";

const Contact = ({ onClose }) => {
  const [state, formspreeSubmit] = useForm("xnnderoq"); // Your Formspree form ID

  const [visible, setVisible] = useState(false);

  // Trigger fade-in on mount
  useEffect(() => {
    setVisible(true);
  }, []);

  // Fade-out before closing
  const handleClose = () => {
    setVisible(false);
    setTimeout(() => onClose(), 300); // match transition duration
  };

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      formspreeSubmit(values).then(() => {
        if (!state.errors || state.errors.length === 0) resetForm();
      });
    },
  });

  return (
    <div
      className={`contact-overlay ${visible ? "fade-in" : "fade-out"}`}
      onClick={handleClose}
    >
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button onClick={handleClose} className="contact-close">
          &times;
        </button>

        {state.succeeded ? (
          <p style={{ textAlign: "center", color: "lightgreen" }}>Thanks for your message!</p>
        ) : (
          <>
            <h2 style={{ textAlign: "center" }}>Let's Connect</h2>
            <form onSubmit={formik.handleSubmit}>
              {/* Name Field */}
              <div className="contact-field">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="contact-error">{formik.errors.name}</div>
                )}
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              {/* Email Field */}
              <div className="contact-field">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="contact-error">{formik.errors.email}</div>
                )}
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              {/* Message Field */}
              <div className="contact-field">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="3"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message && (
                  <div className="contact-error">{formik.errors.message}</div>
                )}
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button type="submit" disabled={state.submitting} className="contact-submit">
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Contact;