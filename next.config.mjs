import withFlowbiteReact from 'flowbite-react/plugin/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  images: {
    qualities: [100],
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

export default withFlowbiteReact(nextConfig);
