"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [isClick, setIsClick] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <nav className={`bg-gray-100 ${scrolling ? "hidden" : ""} fixed top-0 left-0 right-0 z-10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/">
                <Image
                  src="/logowhite.png"
                  alt="Rybenský photo logo"
                  width={80}
                  height={60}
                />
              </a>
            </div>
          </div>
          {/* desktop navbar */}
          <div className="hidden lg:block">
            <div className="ml-4 flex items-center space-x-4">
              <a
                href="/"
                className="text-black hover:bg-white hover:text-black rounded-lg p-2"
              >
                Úvodní stránka
              </a>
              <a
                href="/parovefotky"
                className="text-black hover:bg-white hover:text-black rounded-lg p-2"
              >
                Páry/Rodiny
              </a>
              <a
                href="fotkyzvirat"
                className="text-black hover:bg-white hover:text-black rounded-lg p-2"
              >
                Fotky zvířat
              </a>
              <a
                href="ostatni"
                className="text-black hover:bg-white hover:text-black rounded-lg p-2"
              >
                Ostatní
              </a>
              <a
                href="cenik"
                className="text-black hover:bg-white hover:text-black rounded-lg p-2"
              >
                Ceník
              </a>
              <a
                href="kontakt"
                className="text-black hover:bg-white hover:text-black rounded-lg p-2"
              >
                Kontakt
              </a>
            </div>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inser focus:ring-bhlack"
              onClick={toggleNavbar}
            >
              <Hamburger
                toggled={isClick}
                toggle={setIsClick}
                size={48}
                direction="right"
                duration={0.8}
              />
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="flex flex-col text-center px-2 pt-2 pb-2 space-y-1 sm:px-3">
          <a
            href="/"
            className="text-black hover:bg-white hover:text-black rounded-lg p-2"
          >
            Úvodní stránka
          </a>
          <a
            href="/parovefotky"
            className="text-black hover:bg-white hover:text-black rounded-lg p-2"
          >
            Páry/Rodiny
          </a>
          <a
            href="fotkyzvirat"
            className="text-black hover:bg-white hover:text-black rounded-lg p-2"
          >
            Fotky zvířat
          </a>
          <a
            href="ostatni"
            className="text-black hover:bg-white hover:text-black rounded-lg p-2"
          >
            Ostatní
          </a>
          <a
            href="cenik"
            className="text-black hover:bg-white hover:text-black rounded-lg p-2"
          >
            Ceník
          </a>
          <a
            href="kontakt"
            className="text-black hover:bg-white hover:text-black rounded-lg p-2"
          >
            Kontakt
          </a>
        </div>
      )}
    </nav>
  );
}