import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  devIndicators: false,
  images: {
    remotePatterns: [new URL('https://storage.googleapis.com/qrius-portfolio-assets/images/**'), new URL('https://github.com/QriusDev/**'), new URL('https://i1.sndcdn.com/**')]
  }
};

//module.exports = {
  //images: {
    //remotePatterns: [new URL('https://storage.googleapis.com/qrius-portfolio-assets/images/**'), new URL('https://github.com/QriusDev/**'), new URL('https://i1.sndcdn.com/**')]
  //}
//}

export default nextConfig;
