import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "ghhmsyrbafnrbqncudao.supabase.co",
      pathname: "/storage/v1/object/public/productos/**",
    }, {
      protocol: "https",
      hostname: "ghhmsyrbafnrbqncudao.supabase.co",
      pathname: "/storage/v1/object/public/sitio/**",
    }],
  },
};

export default nextConfig;
