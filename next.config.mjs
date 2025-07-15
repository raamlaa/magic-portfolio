import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  async redirects() {
    return [
      {
        source: '/',   // incoming path
        destination: '/about', // where to go
        permanent: false,      // 307/308?  false = 307 (good for dev)
      },
    ];
  },
};

export default withMDX(nextConfig);
