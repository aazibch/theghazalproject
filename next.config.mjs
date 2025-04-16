/** @type {import('next').NextConfig} */
const nextConfig = {
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
