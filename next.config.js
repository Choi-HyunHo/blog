/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

const nextConfig = {};

module.exports = withContentlayer({
    reactStrictMode: true,
});
