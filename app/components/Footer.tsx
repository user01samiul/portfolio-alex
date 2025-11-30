import { Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Footer Section */}
      <footer className="relative w-full bg-[#B9B9B9] py-32 px-16">
        <div className="grid grid-cols-12 gap-8">
          {/* Column 1 - Logo & Description (3/12 width) */}
          <div className="col-span-3 space-y-6">
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-primary">Alecsandru</span>
                <div className="w-[3px] h-8 bg-primary"></div>
              </div>
              <span className="text-sm text-black mt-2">Attorney at law at night</span>
            </div>
            <div className="border-t border-white/40 pt-6">
              <p className="text-white text-sm leading-relaxed">
                Our lawyers are dedicated to excellence and efficiency. We have shaped our firm to drive your business to success.
              </p>
            </div>
          </div>

          {/* Column 2 - Luxembourg Office (3/12 width) */}
          <div className="col-span-3 space-y-4">
            <h4 className="text-white font-bold text-lg mb-4">Luxembourg Office</h4>
            <div>
              <p className="text-white/80 text-sm font-bold mb-2">ADDRESS</p>
              <p className="text-white text-sm leading-relaxed">
                27, rue de la Paix<br />
                2312 Luxembourg<br />
                Grand Duchy of Luxembourg
              </p>
            </div>
          </div>

          {/* Column 3 - Contact Us (3/12 width) */}
          <div className="col-span-3 space-y-4">
            <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
            <div>
              <p className="text-white/80 text-sm font-bold mb-2">E-MAIL</p>
              <p className="text-white text-sm mb-4">info@carstoiu.com</p>
            </div>
            <div>
              <p className="text-white/80 text-sm font-bold mb-2">PHONE</p>
              <p className="text-white text-sm">
                (+352) 28-12-17<br />
                (+352) 28-12-17-1
              </p>
            </div>
            <div>
              <p className="text-white/80 text-sm font-bold mb-2">FAX</p>
              <p className="text-white text-sm">(+352) 28-12-17-77</p>
            </div>
          </div>

          {/* Column 4 - Useful Links (3/12 width) */}
          <div className="col-span-3 space-y-4">
            <h4 className="text-white font-bold text-lg mb-4">Useful links</h4>
            <div>
              <p className="text-white/80 text-sm font-bold mb-2">WEBSITE</p>
              <div className="space-y-2">
                <p className="text-white text-sm hover:text-primary cursor-pointer transition-colors">
                  Privacy & cookie policy
                </p>
                <p className="text-white text-sm hover:text-primary cursor-pointer transition-colors">
                  General Terms and Conditions
                </p>
              </div>
            </div>
            <div>
              <p className="text-white/80 text-sm font-bold mb-2">SOCIAL</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary transition-colors group"
                >
                  <svg className="w-5 h-5 text-black group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary transition-colors group"
                >
                  <svg className="w-5 h-5 text-black group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <section className="w-full bg-black py-6 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} carstoiu.com. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
}
