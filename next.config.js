/** @type {import('next').NextConfig} */

const withPwa = require('next-pwa');

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPwa({ ...nextConfig, pwa: { dest: 'public' } });
