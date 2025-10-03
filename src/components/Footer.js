"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function footer() {
  const pathname = usePathname();
  const isOnAboutPage = pathname === "/about";

  return (
    <div
      className={`inline-flex flex-col md:flex-row justify-between w-full items-start gap-5 px-6 pb-3 ${
        isOnAboutPage
          ? "bg-black text-white absolute pt-0 bottom-0 left-0"
          : "pt-[257px] "
      }`}
    >
      <div
        className={`flex flex-col justify-start ${
          isOnAboutPage ? "text-white" : "text-black"
        } text-[10.5px] md:text-[14px] font-bold leading-none`}
      >
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
          <Link href="https://www.linkedin.com/in/jesus-bauza/" target="_blank">
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
      <div
        className={` w-[257px] flex flex-col justify-start ${
          isOnAboutPage ? "text-white" : "text-black"
        } text-[10.5px] md:text-[14px] font-bold leading-none`}
      >
        © 2025 Neue Idea. All rights reserved. The content of this website is
        protected by copyright. None of the material, whether text or images,
        may be used for any purpose other than personal use unless expressly
        authorised.
      </div>
    </div>
  );
}
