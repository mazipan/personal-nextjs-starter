/** @type {import('next').NextConfig} */
module.exports = {
  // Force .page prefix on page files (ex. index.page.tsx) so generated files can be included in /pages directory without Next.js throwing build errors
  // https://github.com/vercel/next.js/issues/3728
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  reactStrictMode: true
}
