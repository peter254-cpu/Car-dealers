import { Key } from 'lucide-react';

/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: "/embed",
                headers: [
                    {
                        key: "Content-Security-Policy",
                        value: "frame-src 'self' https://coredrive-waitlist-58.created.app;"
                    }
                ]
            }
        ]
        
    }
};

export default nextConfig;
