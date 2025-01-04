/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['pug']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:
          'theghazalproject-user-avatars.s3.ap-southeast-2.amazonaws.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
