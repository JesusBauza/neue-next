/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dtkqz3wwo/image/upload/**", // ⚠️ ¡Recuerda cambiar esto!
      },
    ],
  },
};

// 👇 La única diferencia es esta línea 👇
export default nextConfig;
