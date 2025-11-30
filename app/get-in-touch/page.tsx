"use client";

import Footer from "../components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function GetInTouch() {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="w-full bg-white py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl font-normal text-black mb-8 text-center">Get in Touch</h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            We'd love to hear from you. Whether you have a question about our services, need legal advice, or just want to talk, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="w-full bg-gray-50 py-24 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Information */}
          <div className="space-y-12">
            {/* Introduction */}
            <div>
              <h2 className="text-4xl font-normal text-black mb-6">Let's start a conversation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our team of experienced attorneys is here to provide you with expert legal guidance. Reach out to us through any of the channels below, and we'll get back to you as soon as possible.
              </p>
            </div>

            {/* Office Address */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Luxembourg Office</h3>
                  <p className="text-gray-700">
                    27, rue de la Paix<br />
                    2312 Luxembourg<br />
                    Grand Duchy of Luxembourg
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Email</h3>
                  <a href="mailto:info@carstoiu.com" className="text-primary hover:underline text-lg">
                    info@carstoiu.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Phone & Fax</h3>
                  <p className="text-gray-700">
                    <span className="font-medium">Phone:</span> (+352) 28-12-17<br />
                    <span className="font-medium">Phone:</span> (+352) 28-12-17-1<br />
                    <span className="font-medium">Fax:</span> (+352) 28-12-17-77
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-normal text-black mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>By appointment</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-12">
            <h2 className="text-4xl font-normal text-black mb-8">Send us a message</h2>

            <form className="space-y-8">
              {/* Name Field */}
              <div>
                <label className="block text-base text-gray-600 mb-3">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:border-primary focus:outline-none transition-colors bg-transparent text-lg"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Phone Field */}
                <div>
                  <label className="block text-base text-gray-600 mb-3">
                    Phone <span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:border-primary focus:outline-none transition-colors bg-transparent text-lg"
                    placeholder="+352 xx-xx-xx"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-base text-gray-600 mb-3">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:border-primary focus:outline-none transition-colors bg-transparent text-lg"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-base text-gray-600 mb-3">
                  Subject <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:border-primary focus:outline-none transition-colors bg-transparent text-lg"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-base text-gray-600 mb-3">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none bg-transparent text-lg"
                  placeholder="Tell us about your legal needs..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-start mt-12">
                <button
                  type="submit"
                  className="px-12 py-4 border border-black text-black font-bold bg-transparent cursor-pointer transition-all hover:border-primary hover:text-primary"
                >
                  Send Message
                </button>
              </div>

              {/* Privacy Policy Text */}
              <p className="text-sm text-gray-500 leading-relaxed">
                By clicking "Send Message", you agree to send us your data. We undertake to use provided data in accordance with our data protection principles. The administrator of personal data is CARSTOIU. More in the privacy policy.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
