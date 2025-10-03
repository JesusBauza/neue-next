"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import TransitionLink from "./TransitionLink";
import { usePathname } from "next/navigation";
import RevealAnimation from "./RevealAnimation";
import RollingTextLink from "./RollingTextLink";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isOnAboutPage = pathname === "/about";

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header
      className={`${
        isOnAboutPage ? "bg-black" : ""
      } absoulute top-0 left-0 w-full p-6 pb-0 z-50`}
    >
      <nav
        className={`flex justify-between items-center ${
          isOnAboutPage ? "text-white" : "text-black"
        }`}
      >
        <TransitionLink
          href="/"
          className={`font-bold text-lg z-50 ${
            isHomePage ? "hidden sm:block" : "block"
          }`}
        >
          <RevealAnimation delay={0.2}>
            <svg
              width="109"
              height="20"
              viewBox="0 0 109 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0H3.47597L12.6322 15.0692H12.6877V0H15.7487V19.5895H12.2748L3.09181 4.52035H3.03634V19.5895H0.00205323V0H0Z"
                fill="currentColor"
              />
              <path
                d="M16.8806 12.5756C16.8806 8.192 19.5287 5.17775 23.8305 5.17775C28.1323 5.17775 30.5051 7.9716 30.5051 12.3001C30.5051 12.6838 30.5051 13.094 30.4784 13.3144H19.6663C19.7218 15.6715 21.1003 17.8082 23.886 17.8082C26.3676 17.8082 27.3065 16.2184 27.5818 15.2878H30.312C29.595 17.9735 27.5263 20 23.8305 20C19.3623 20 16.8806 16.849 16.8806 12.5756ZM19.6643 11.2062H27.6619C27.6619 9.01444 26.1458 7.3716 23.7463 7.3716C21.4844 7.3716 19.8307 8.90628 19.6643 11.2062Z"
                fill="currentColor"
              />
              <path
                d="M36.8201 17.6979C39.1374 17.6979 40.6268 16.3 40.6268 14.1919V5.61647H43.3304V19.5897H40.6268V17.8367H40.5714C39.8277 18.9061 38.365 19.9734 35.9388 19.9734C33.3462 19.9734 31.2507 18.4939 31.2507 15.2878V5.61647H33.981V14.547C33.981 16.4367 34.8089 17.6979 36.8221 17.6979H36.8201Z"
                fill="currentColor"
              />
              <path
                d="M44.2139 12.5756C44.2139 8.192 46.8619 5.17775 51.1638 5.17775C55.4656 5.17775 57.8384 7.9716 57.8384 12.3001C57.8384 12.6838 57.8384 13.094 57.8117 13.3144H46.9996C47.055 15.6715 48.4335 17.8082 51.2192 17.8082C53.7009 17.8082 54.6397 16.2184 54.915 15.2878H57.6453C56.9283 17.9735 54.8595 20 51.1638 20C46.6955 20 44.2139 16.849 44.2139 12.5756ZM46.9975 11.2062H54.9951C54.9951 9.01444 53.479 7.3716 51.0795 7.3716C48.8177 7.3716 47.1639 8.90628 46.9975 11.2062Z"
                fill="currentColor"
              />
              <path
                d="M66.8015 0V19.5895H63.7672V0H66.8015Z"
                fill="currentColor"
              />
              <path
                d="M78.4682 7.31419V0H81.1984V19.5895H78.4682V17.9467H78.4127C77.669 18.9324 76.2885 19.9732 74.0821 19.9732C70.4972 19.9732 67.7937 17.2059 67.7937 12.6039C67.7937 8.00194 70.4972 5.20606 74.0821 5.20606C76.2885 5.20606 77.6669 6.22033 78.4127 7.31624H78.4682V7.31419ZM78.4682 12.6019C78.4682 9.42436 76.952 7.45092 74.5238 7.45092C71.8757 7.45092 70.6082 9.86109 70.6082 12.6019C70.6082 15.3427 71.8778 17.7528 74.5238 17.7528C76.95 17.7528 78.4682 15.7529 78.4682 12.6019Z"
                fill="currentColor"
              />
              <path
                d="M82.0531 12.5756C82.0531 8.192 84.7012 5.17775 89.003 5.17775C93.3048 5.17775 95.6776 7.9716 95.6776 12.3001C95.6776 12.6838 95.6776 13.094 95.6488 13.3144H84.8388C84.8943 15.6715 86.2727 17.8082 89.0585 17.8082C91.5401 17.8082 92.479 16.2184 92.7542 15.2878H95.4845C94.7675 17.9735 92.6988 20 89.003 20C84.5348 20 82.0531 16.849 82.0531 12.5756ZM84.8388 11.2062H92.8364C92.8364 9.01444 91.3203 7.3716 88.9208 7.3716C86.659 7.3716 85.0052 8.90628 84.8388 11.2062Z"
                fill="currentColor"
              />
              <path
                d="M95.926 15.9715C95.926 12.8491 98.2988 11.945 101.801 11.2593C104.008 10.8491 105.36 10.5736 105.36 9.20424C105.36 8.18996 104.754 7.34099 102.685 7.34099C100.23 7.34099 99.4862 8.10833 99.3465 9.97157H96.5896C96.7272 7.2859 98.4919 5.17775 102.796 5.17775C105.692 5.17775 108.008 6.38386 108.008 10.0001V16.4123C108.008 17.4266 108.145 17.947 108.669 17.947C108.751 17.947 108.836 17.947 109 17.9204V19.5633C108.532 19.6735 108.063 19.7265 107.621 19.7265C106.298 19.7265 105.553 19.2061 105.415 17.6164H105.36C104.423 19.0694 102.823 19.9735 100.534 19.9735C97.7215 19.9735 95.9281 18.3572 95.9281 15.9735L95.926 15.9715ZM105.36 14.1368V12.1368C104.918 12.5491 103.706 12.8491 102.272 13.1511C99.7903 13.6715 98.7693 14.3287 98.7693 15.7817C98.7693 17.096 99.4595 17.8082 101.142 17.8082C103.568 17.8082 105.362 16.5756 105.362 14.1368H105.36Z"
                fill="currentColor"
              />
            </svg>
          </RevealAnimation>
        </TransitionLink>

        <div
          className={`hidden md:flex gap-[41.33px] ${
            isOnAboutPage ? "text-white" : "text-black"
          } text-[0.8rem] font-bold  uppercase leading-none`}
        >
          <RevealAnimation delay={0.3}>
            <RollingTextLink href="/proyecto/proyecto-ejemplo" text="Works">
              Works
            </RollingTextLink>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <RollingTextLink
              href="/about"
              isTransitionLink={false}
              text="About"
            >
              About
            </RollingTextLink>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <RollingTextLink
              text="Blog"
              isTransitionLink={false}
              href="https://goodtastereligion.substack.com/"
              target="_blank"
              className="leading-4"
            >
              Blog
            </RollingTextLink>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <RollingTextLink
              text="Contact"
              href="mailto:hello@neueidea.com"
              isTransitionLink={false}
              target="_blank"
            >
              Contact
            </RollingTextLink>
          </RevealAnimation>
        </div>

        <button
          className="ml-auto md:hidden z-[110]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            width="52"
            height="12"
            viewBox="0 0 52 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // Añadimos una clase condicional que se activa cuando el menú está abierto
            className={`hamburger-icon ${isMenuOpen ? "menu-open" : ""}`}
          >
            {/* Línea superior */}
            <path
              className="top-line"
              d="M52 0.5H0"
              stroke={`${isOnAboutPage ? "white" : "black"}`}
            />
            {/* Línea inferior */}
            <path
              className="bottom-line"
              d="M52 11.5H13.7027"
              stroke={
                isOnAboutPage && isMenuOpen
                  ? "black"
                  : isOnAboutPage
                  ? "white"
                  : "black"
              }
            />
          </svg>
        </button>

        <div
          className={`
            fixed top-0 left-0 w-full h-full bg-white flex flex-col items-left justify-between pb-[34px] pl-[20px] pt-[121px]  gap-[-30px]
            transform transition-transform duration-500 ease-in-out z-[105]
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex flex-col">
            <RollingTextLink
              href="/"
              className="text-black text-[42px] font-bold   leading-none"
              onClick={() => setIsMenuOpen(false)}
              text="Works"
              alignment="justify-start"
            >
              Works
            </RollingTextLink>

            <RollingTextLink
              href="/about"
              className="text-black text-[42px] font-bold  leading-none "
              onClick={() => setIsMenuOpen(false)}
              isTransitionLink={false}
              text="About"
              alignment="justify-start"
            >
              About
            </RollingTextLink>

            <RollingTextLink
              href="https://goodtastereligion.substack.com/"
              className="text-black text-[42px] font-bold leading-none "
              onClick={() => setIsMenuOpen(false)}
              target="_blank"
              isTransitionLink={false}
              text="Blog"
              alignment="justify-start"
            ></RollingTextLink>

            <RollingTextLink
              href="mailto:hello@neueidea.com"
              className="text-black text-[42px] font-bold  leading-none "
              onClick={() => setIsMenuOpen(false)}
              target="_blank"
              isTransitionLink={false}
              text="Contact"
              alignment="justify-start"
            ></RollingTextLink>
          </div>
          <div className="inline-flex flex-col justify-start items-start gap-5">
            <div className="flex flex-col justify-start text-black text-[10.5px] font-bold leading-none">
              <span>
                Naming:{" "}
                <Link
                  href="https://www.linkedin.com/in/eduardojcarvajal/"
                  target="_blank"
                >
                  Eduardo Carvajal (VE)
                </Link>
              </span>
              <span>
                Code:{" "}
                <Link
                  href="https://www.linkedin.com/in/arturo-p%C3%A9rez-peinado/"
                  target="_blank"
                >
                  Arturo Pérez (VE)
                </Link>
              </span>
              <span>
                Web Design:{" "}
                <Link
                  href="https://www.linkedin.com/in/jesus-bauza/"
                  target="_blank"
                >
                  Jesús Bauza (VE)
                </Link>
              </span>
              <span>Typeface: PP Neue Montreal</span>
              <span>
                LinkedIn:{" "}
                <Link
                  href="https://www.linkedin.com/company/neueidea/"
                  target="_blank"
                >
                  Neue Idea
                </Link>
              </span>
            </div>
            <div className=" w-[205px] flex flex-col justify-start text-black text-[10.5px] font-bold leading-none ">
              © 2025 Neue Idea. All rights reserved. The content of this website
              is protected by copyright. None of the material, whether text or
              images, may be used for any purpose other than personal use unless
              expressly authorised.
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
