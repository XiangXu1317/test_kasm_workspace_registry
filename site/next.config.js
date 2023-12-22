/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Xiang Technologies',
    description: 'The home store for Kasm supported workspaces.',
    icon: ' https://xiangxu1317.github.io/test_kasm_workspace_registry/1.0/gimp.png',
    listUrl: ' https://xiangxu1317.github.io/test_kasm_workspace_registry_/',
    contactUrl: ' https://xiangxu1317.github.io/test_kasm_workspace_registry/issues',
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
