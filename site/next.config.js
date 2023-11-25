/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Xiang Technologies',
    description: 'The home store for Kasm supported workspaces.',
    icon: 'https://github.com/XiangXu1317/test_kasm_workspace_registry/blob/1.0/site/public/gimp.png',
    listUrl: 'https://registry.kasmweb.com/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/test_kasm_workspace_registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
