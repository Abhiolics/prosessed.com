const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {

  // const res = await fetch('/api/contact', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(formData),
  // }),  

  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below




  images: {
    domains: ['img.freepik.com'], // Add the domain of your image
  },
};

module.exports = withMDX(nextConfig);

