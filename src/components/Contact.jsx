import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const initialValues = {
    from_name: "",
    from_email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    from_name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters long"),
    from_email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string()
      .required("Message is required")
      .min(10, "Message must be at least 10 characters long"),
  });

  const sendEmail = (values, { resetForm }) => {
    emailjs
      .send("service_hgxikuj", "template_sv5f9ek", values, "Li8wTN_qO8Gt4tJNw")
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully.");
          resetForm();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message.");
        }
      );
  };

  return (
    <div className="flex justify-center bg-blue-950 h-screen px-2 sm:px-0">
      <div className="w-[400px] h-[300px]">
        <h1 className="mt-10 mb-2 text-xl font-semibold text-white">
          Contact Us
        </h1>
        <div className="w-full border border-white sm:border-black rounded px-2">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={sendEmail}
          >
            {({ isSubmitting }) => (
              <Form>
                <label className="block text-xl text-white">Name</label>
                <Field
                  type="text"
                  name="from_name"
                  placeholder="Enter Name"
                  className="block w-full px-2 py-1 mt-2 mb-2 rounded"
                />
                <ErrorMessage
                  name="from_name"
                  component="div"
                  className="text-red-500 text-sm"
                />

                <label className="block text-xl text-white">Email</label>
                <Field
                  type="email"
                  name="from_email"
                  placeholder="Enter Email"
                  className="block w-full px-2 py-1 mt-2 mb-2 rounded"
                />
                <ErrorMessage
                  name="from_email"
                  component="div"
                  className="text-red-500 text-sm"
                />

                <label className="block text-xl text-white">Message</label>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Message"
                  className="block px-2 rounded mt-2 mb-2 w-full"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="block bg-black text-white text-base font-semibold px-4 py-1 rounded w-full mb-2"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
