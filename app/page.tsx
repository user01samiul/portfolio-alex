"use client";

import { useState, useEffect } from "react";
import Footer from "./components/Footer";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Hero Section */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out"
          style={{
            backgroundImage: "url('https://carstoiu.com/wp-content/uploads/2020/05/Homepage-2-1-scaled.jpg')",
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`,
          }}
        />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-8xl text-white text-center leading-tight w-[95%] md:w-[90%] lg:w-[85%]">
            Your vision Our expertise Right now
          </h1>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="w-full bg-white py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-normal text-black mb-12">Who we are</h2>

          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              We are independent corporate, commercial and trial attorneys with more than 10 years experience in top tier French, German and Benelux international law firms.
            </p>

            <p>
              We represent a wide array of clients, from mid-sized to large international organisations with the personalised dedication and responsiveness of a boutique-type firm.
            </p>

            <p>
              We advise in all areas of Luxembourg law with a particular focus on corporate and commercial law, civil law and corporate and commercial litigation. For more information feel free to contact us at <a href="mailto:info@carstoiu.com" className="text-primary underline hover:text-primary/80">info@carstoiu.com</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative w-full bg-[#B9B9B9] py-16 overflow-visible">
        {/* Decorative curved lines on the right */}
        <div className="absolute right-0 top-1/4 w-64 h-64 opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M 10,50 Q 50,10 100,50 T 190,50" stroke="white" strokeWidth="2" fill="none" />
            <path d="M 10,80 Q 50,40 100,80 T 190,80" stroke="white" strokeWidth="2" fill="none" />
            <path d="M 10,110 Q 50,70 100,110 T 190,110" stroke="white" strokeWidth="2" fill="none" />
            <path d="M 10,140 Q 50,100 100,140 T 190,140" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
          {/* Left Side - Titles */}
          <div className="space-y-8 px-16 max-w-3xl">
            <div className="pb-4 border-b border-white/40">
              <h3 className="text-5xl font-normal text-white">Corporate</h3>
            </div>
            <div className="pb-4 border-b border-white/40">
              <h3 className="text-5xl font-normal text-white">Litigation</h3>
            </div>
            <div className="pb-4 border-b border-white/40">
              <h3 className="text-5xl font-normal text-white">Civil</h3>
            </div>
          </div>

          {/* Right Side - Card extending beyond gray bg */}
          <div
            className="bg-[#EBEBEB] p-12 relative"
            style={{
              marginBottom: "-12rem",
              marginTop: "4rem"
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="pb-4 border-b border-gray-300">
                  <p className="text-gray-700">Corporate governance</p>
                </div>
                <div className="pb-4 border-b border-gray-300">
                  <p className="text-gray-700">Private equity</p>
                </div>
                <div className="pb-4 border-b border-gray-300">
                  <p className="text-gray-700">Due dilligence prior to acquisitions</p>
                </div>
                <div className="pb-4 border-b border-gray-300">
                  <p className="text-gray-700">Setting up of special purpose vehicles and start-ups</p>
                </div>
                <div className="pb-4 border-b border-gray-300">
                  <p className="text-gray-700">Business restructuration</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="pb-4 border-b border-gray-300">
                  <p className="text-gray-700">Migrations</p>
                </div>
                <div className="pb-4 border-b border-gray-300">
                  <p className="text-gray-700">Mergers and acquisitions</p>
                </div>
                <div className="pb-4 border-b border-gray-300">
                  <p className="text-gray-700">Partnership agreements</p>
                </div>
                <div className="pb-4 border-b border-gray-300">
                  <p className="text-gray-700">Shareholders' agreements</p>
                </div>
                <div className="pb-4 border-b border-gray-300">
                  <p className="text-gray-700">Sale and purchase agreements</p>
                </div>
                <div className="pb-4 border-b border-gray-300">
                  <p className="text-gray-700">Technology transactions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="w-full bg-white py-24 px-8 mt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-normal text-black mb-16 text-center">Publications</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Column 1 */}
            <div className="space-y-8">
              {/* Publication 1 */}
              <div className="pb-6 border-b border-gray-300 group cursor-pointer">
                <h3 className="text-3xl text-black mb-3 group-hover:text-primary transition-colors">
                  Company set-up: the public limited liability company - société anonyme
                </h3>
                <p className="text-gray-600">
                  <span className="font-bold">16.07.2020</span> <span className="font-bold">|</span> IT'S RIGHT AROUND THE CORNER
                </p>
              </div>

              {/* Publication 2 */}
              <div className="pb-6 border-b border-gray-300 group cursor-pointer">
                <h3 className="text-3xl text-black mb-3 group-hover:text-primary transition-colors">
                  Covid-19 legal bundle: Litigation and judiciary administration
                </h3>
                <p className="text-gray-600">
                  <span className="font-bold">15.07.2020</span> <span className="font-bold">|</span> Loi du 24 juin 2020 portant introduction d'une série de mesures concernant les personnes physiques […]
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-8">
              {/* Publication 1 */}
              <div className="pb-6 border-b border-gray-300 group cursor-pointer">
                <h3 className="text-3xl text-black mb-3 group-hover:text-primary transition-colors">
                  Company set-up: the private limited liability company - société à responsabilité limitée
                </h3>
                <p className="text-gray-600">
                  <span className="font-bold">16.07.2020</span> <span className="font-bold">|</span> IT'S RIGHT AROUND THE CORNER
                </p>
              </div>

              {/* Publication 2 */}
              <div className="pb-6 border-b border-gray-300 group cursor-pointer">
                <h3 className="text-3xl text-black mb-3 group-hover:text-primary transition-colors">
                  Covid-19 legal bundle: Business law
                </h3>
                <p className="text-gray-600">
                  <span className="font-bold">15.07.2020</span> <span className="font-bold">|</span> Loi du 20 juin 2020 portant prorogation des mesures concernant la tenue de réunions dans […]
                </p>
              </div>

              {/* Publication 3 */}
              <div className="pb-6 border-b border-gray-300 group cursor-pointer">
                <h3 className="text-3xl text-black mb-3 group-hover:text-primary transition-colors">
                  Managers' liability of a private limited liability company (société à responsabilité limitée) under the Luxembourg Law of 10 August 1915 on Commercial Companies as amended ("Law")
                </h3>
                <p className="text-gray-600">
                  <span className="font-bold">13.03.2020</span> <span className="font-bold">|</span> MANAGERS' LIABILITY OF A LUXEMBOURG PRIVATE LIMITED LIABILITY COMPANY (SOCIÉTÉ À RESPONSABILITÉ LIMITÉE) UNDER THE […]
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-8">
              {/* Publication 1 */}
              <div className="pb-6 border-b border-gray-300 group cursor-pointer">
                <h3 className="text-3xl text-black mb-3 group-hover:text-primary transition-colors">
                  Another register is born: the new register of fiducies and trusts
                </h3>
                <p className="text-gray-600">
                  <span className="font-bold">15.07.2020</span> <span className="font-bold">|</span> ANOTHER REGISTER IS BORN: THE REGISTER OF FIDUCIES AND TRUSTS The new law creating a […]
                </p>
              </div>

              {/* Publication 2 */}
              <div className="pb-6 border-b border-gray-300 group cursor-pointer">
                <h3 className="text-3xl text-black mb-3 group-hover:text-primary transition-colors">
                  The New Law of 10 July 2020 on professional payment guarantees
                </h3>
                <p className="text-gray-600">
                  <span className="font-bold">14.07.2020</span> <span className="font-bold">|</span> THE NEW LAW OF 10 JULY 2020 ON PROFESSIONAL PAYMENT GUARANTEES The new law of […]
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-center mt-16">
            <button className="px-8 py-4 border border-black text-black font-bold bg-transparent cursor-pointer transition-all hover:border-primary hover:text-primary">
              Check our publications
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center py-12 md:py-24 px-4 md:px-8 flex items-center"
        style={{
          backgroundImage: "url('https://carstoiu.com/wp-content/uploads/2020/05/HOmeage-background-scaled.jpg')"
        }}
      >
        {/* White Card */}
        <div className="w-full md:ml-16 max-w-full md:max-w-5xl mx-auto md:mx-0">
          <div className="bg-white flex flex-col md:flex-row overflow-hidden min-h-auto md:min-h-[600px]">
            {/* Left Side - Person Image */}
            <div className="w-full md:w-2/5 h-64 md:h-auto">
              <img
                src="https://carstoiu.com/wp-content/themes/carstoiu/img/about_us_person_bg.jpg"
                alt="Alexandru Onac"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center">
              <h3 className="text-2xl md:text-4xl text-black mb-4 md:mb-6 font-normal">
                We understand your legal needs
              </h3>
              <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
                "Our clients are sharp, demanding and result driven. We like that. We find simple and fast solutions to their most challenging and complex cases."
              </p>
              <p className="text-sm md:text-base text-black font-medium">
                Alexandru Onac / Partner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full bg-white py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-normal text-black mb-16 text-center">Get in Touch</h2>

          <form className="space-y-8">
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
                  placeholder="Your phone number"
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
                  placeholder="Your email address"
                />
              </div>
            </div>

            {/* Enquiry Subject Field */}
            <div>
              <label className="block text-base text-gray-600 mb-3">
                Enquiry subject <span className="text-primary">*</span>
              </label>
              <textarea
                required
                rows={6}
                className="w-full px-0 py-4 border-0 border-b-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none bg-transparent text-lg"
                placeholder="Tell us about your enquiry..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-12">
              <button
                type="submit"
                className="px-12 py-4 border border-black text-black font-bold bg-transparent cursor-pointer transition-all hover:border-primary hover:text-primary"
              >
                Send contact request
              </button>
            </div>

            {/* Privacy Policy Text */}
            <p className="text-sm text-gray-500 text-center leading-relaxed max-w-2xl mx-auto mt-8">
              By clicking "Send", you agree to send us your data. We undertake to use provided data in accordance with our data protection principles, The administrator of personal data is CARSTOIU. More in the privacy policy.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
