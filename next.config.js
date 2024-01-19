/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {},
        serverComponentsExternalPackages: ['mongoose']
    },
    images: {
        remotePatterns: [
            {
                hostname: 'm.media-amazon.com'
            }
        ]
    }
}

module.exports = nextConfig
