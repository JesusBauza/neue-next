import localFont from "next/font/local";
import "./globals.css";
import ClientSetup from "@/components/ClientSetup";
import Header from "@/components/Header";
import { TransitionProvider } from "@/context/TransitionContext";
import ClientWrapper from "@/components/ClientWrapper";
import Footer from "@/components/Footer";
import BodyStyler from "@/components/BodyStyler";

const ppNeueMontreal = localFont({
  src: [
    {
      path: "../assets/fonts/PPNeueMontreal-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-Book.woff2",
      weight: "450",
      style: "normal",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-principal",
});

export const metadata = {
  title: {
    default: "Neue Idea",
    template: "%s | Neue Idea",
  },
  description: "Un portafolio de diseño y desarrollo web...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body
        className={`${ppNeueMontreal.className} ${ppNeueMontreal.className}`}
      >
        <TransitionProvider>
          <BodyStyler />
          <Header />
          <ClientWrapper>
            <ClientSetup />
            {children}
          </ClientWrapper>
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
