"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full bg-white border-b border-gray-200 fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "h-20" : "h-28"
      }`}
    >
      <div className="w-full h-full">
        <div className="flex items-center justify-between h-full pr-16">
          {/* Left Side - Logo Card */}
          <div
            className={`bg-white pl-16 pr-16 transition-all duration-300 ${
              isScrolled ? "py-3" : "py-6 pb-8"
            }`}
            style={{
              position: "relative",
              top: isScrolled ? "0" : "1.5rem",
            }}
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <span
                  className={`font-bold text-primary transition-all duration-300 ${
                    isScrolled ? "text-2xl" : "text-4xl"
                  }`}
                >
                  Alecsandru
                </span>
                <div
                  className={`w-[3px] bg-primary transition-all duration-300 ${
                    isScrolled ? "h-6" : "h-10"
                  }`}
                ></div>
              </div>
              <span
                className={`text-black mt-2 transition-all duration-300 ${
                  isScrolled ? "text-base" : "text-lg"
                }`}
              >
                Attorney at law at night
              </span>
            </div>
          </div>

          {/* Right Side - Menu */}
          <div className="flex items-center gap-8">
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
        </div>
      </div>
    </nav>
  );
}
