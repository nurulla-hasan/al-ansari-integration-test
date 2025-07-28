import createNextIntlPlugin from 'next-intl/plugin'; 

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['backend.alansarilaw.com'],
  },
}

export default withNextIntl(nextConfig);