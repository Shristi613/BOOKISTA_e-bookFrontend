/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com',
                pathname: '/**',  // This allows all images from this domain
            },
        ],
    },
};

export default nextConfig;

