import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  // images: {
  //   unoptimized: true, 
  // },
  // assetPrefix: ".", 
  sassOptions: {
    includePaths: ["node_modules"],
    
  },};

export default nextConfig;