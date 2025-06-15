"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    projectType: "",
    timeSlot: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false); // for preloader

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Check Your Mail! 👍");
        setFormData({
          name: "",
          email: "",
          contactNumber: "",
          projectType: "",
          timeSlot: "",
          message: "",
        });
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch (error) {
      setStatus("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative top-12 bg-white py-16 px-5 sm:px-9 xl:px-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-3">
          Work With Me
        </h2>

        {/* 👇 Animated Text Line */}
        <p className="text-center text-gray-500 mb-2 flex justify-center items-center gap-1">
          Have a project in mind? Let’s Connect
          <motion.span
            className="inline-block"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            .
          </motion.span>
          <motion.span
            className="inline-block"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
          >
            .
          </motion.span>
          <motion.span
            className="inline-block"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
          >
            .
          </motion.span>
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="What should we call you?"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-black"
              disabled={loading}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-black"
              disabled={loading}
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Conatct
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Your phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-black"
              disabled={loading}
            />
          </div>

          {/* Project Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-black"
              disabled={loading}
            >
              <option value="">Select a service</option>
              <option value="food">Food Photography</option>
              <option value="product">Product Photography</option>
              <option value="branding">Other</option>
            </select>
          </div>

          {/* Time Slot */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Best Time To Connect...
            </label>
            <select
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-black"
              disabled={loading}
            >
              <option value="">Select a time slot</option>
              <option value="10am-12pm">10:00 AM - 12:00 PM</option>
              <option value="12pm-2pm">12:00 PM - 2:00 PM</option>
              <option value="2pm-4pm">2:00 PM - 4:00 PM</option>
              <option value="anytime">Anytime</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project or idea..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-black resize-none"
              disabled={loading}
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-accent transition-colors duration-300 flex justify-center items-center"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              "Send Inquiry"
            )}
          </button>

          {/* Status Message */}
          {status && (
            <p className="text-center mt-4 text-sm text-gray-600">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default InquiryForm;
