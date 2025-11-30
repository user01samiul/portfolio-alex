"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const menuItems = [
  { name: "HOME", href: "/" },
  { name: "OUR EXPERTS", href: "/our-experts" },
  { name: "WHAT WE DO", href: "/what-we-do" },
  { name: "PUBLICATIONS", href: "/publications" },
  { name: "WORK WITH US", href: "/work-with-us" },
  { name: "GET IN TOUCH", href: "/get-in-touch" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize(); // Initial check
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`w-full bg-white border-b border-gray-200 fixed top-0 left-0 z-50 transition-all duration-300 h-20 lg:h-auto ${
          isScrolled ? "lg:h-20" : "lg:h-28"
        }`}
      >
        <div className="w-full h-full">
          <div className="flex items-center justify-between h-full pr-4 md:pr-16">
            {/* Left Side - Logo Card */}
            <Link href="/">
              <div
                className={`bg-white pl-4 pr-4 md:pl-16 md:pr-16 py-3 lg:py-auto transition-all duration-300 ${
                  isScrolled ? "lg:py-3" : "lg:py-6 lg:pb-8"
                }`}
                style={{
                  position: "relative",
                  top: isDesktop && !isScrolled ? "1.5rem" : "0",
                }}
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 md:gap-3">
                    <span
                      className={`font-bold text-primary transition-all duration-300 text-xl ${
                        isScrolled ? "lg:text-2xl" : "lg:text-4xl"
                      }`}
                    >
                      Alecsandru
                    </span>
                    <div
                      className={`w-[3px] bg-primary transition-all duration-300 h-5 ${
                        isScrolled ? "lg:h-6" : "lg:h-10"
                      }`}
                    ></div>
                  </div>
                  <span
                    className={`text-black mt-1 md:mt-2 transition-all duration-300 text-xs ${
                      isScrolled ? "lg:text-base" : "lg:text-lg"
                    }`}
                  >
                    Attorney at law at night
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Menu - Hidden on mobile */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-8">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`text-sm transition-colors relative pb-1 ${
                        pathname === item.href
                          ? "text-primary font-bold"
                          : "text-black font-normal hover:text-primary"
                      }`}
                    >
                      {item.name}
                      {pathname === item.href && (
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary"></span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Vertical Line */}
              <div className="w-[1px] h-6 bg-gray-300"></div>

              {/* Call Icon */}
              <button className="text-primary hover:text-primary/80 transition-colors">
                <Phone size={20} />
              </button>
            </div>

            {/* Mobile Menu Button - Visible only on mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-black p-2"
              aria-label="Toggle menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-[60] transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-primary">Alecsandru</span>
                <div className="w-[3px] h-8 bg-primary"></div>
              </div>
              <span className="text-sm text-black mt-1">Attorney at law at night</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-black p-2"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto py-6">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-6 py-4 text-base transition-colors ${
                      pathname === item.href
                        ? "text-primary font-bold bg-primary/5 border-l-4 border-primary"
                        : "text-black font-normal hover:text-primary hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-gray-200">
            <button className="flex items-center gap-3 text-primary hover:text-primary/80 transition-colors">
              <Phone size={20} />
              <span className="font-medium">Contact Us</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[55] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
