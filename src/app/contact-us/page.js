"use client"
import Nav from "../components/nav"
import Footer1 from "../components/footer1"
import  { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // API endpoint URL
  const api = "https://script.google.com/macros/s/AKfycbwWxXCGB7BMq7HjJIs2ZjWTF0_aHK95-AvlAtMJD56Nxu18iXvUFvHJZLoRwx1gPAHTlA/exec";

  // Form validation schema using Yup
  const validationSchema = yup.object({
    name: yup.string().min(4).max(30).required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    message: yup.string().min(10).max(2000).required('Message is required'),
  });

  // Formik hook for form handling
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);
      // Add a date to the values
      const dataWithDate = { ...values, date: new Date().toLocaleString() };
      // Submit form data
      fetch(api, { method: "POST", body: JSON.stringify(dataWithDate) })
        .then(response => response.text())
        .then(message => {
          swal("Success", message, "success");
          formik.resetForm();
        })
        .catch(error => {
          swal("Error", error.message, "error");
        })
        .finally(() => setIsSubmitting(false));
    },
  });

  return (
    <>
    <Nav/>
    <div className="container mx-auto shadow-md rounded border border-primary p-6 mt-3">
      <form id="contact_form" onSubmit={formik.handleSubmit}>
        <h1 className="text-lg font-bold mb-4">Contact Us</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            cols="30"
            rows="10"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500 text-sm">{formik.errors.message}</div>
          ) : null}
        </div>
        <button type="submit" className="btn btn-success bg-blue-700 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mb-2" disabled={isSubmitting} style={{
            backgroundColor:"blue !important"
        }}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
    <Footer1/>
    </>
  );
};

export default ContactForm;
