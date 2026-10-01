import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  async redirects() {
    return [
      // Old WordPress site (2025) URLs.
      { source: "/home/", destination: "/", permanent: true },
      { source: "/service-areas/akron-pa/", destination: "/service-areas/", permanent: true },
      { source: "/home-repair-remodeling-services/", destination: "/home-repair/", permanent: true },
      { source: "/roof-repair-replacement/", destination: "/roofing/", permanent: true },
      { source: "/professional-roof-repair-replacement-in-lancaster-lebanon-pa/", destination: "/doors/", permanent: true },
      { source: "/construction-womelsdorf-pa/", destination: "/projects/womelsdorf-laundromat-porch-exterior/", permanent: true },
      { source: "/bathroom-remodel-with-a-new-tub-with-jets-and-tile-walls/", destination: "/projects/bathroom-remodel-jet-tub-tile/", permanent: true },
      { source: "/transforming-our-home-a-full-house-remodel-in-reading/", destination: "/projects/full-house-remodel-reading-pa/", permanent: true },
      { source: "/repair-or-replace-making-the-right-choice-for-your-home/", destination: "/blog/roof-repair-vs-replacement/", permanent: true },
      { source: "/boost-your-homes-value-with-smart-renovations/", destination: "/blog/", permanent: true },
      { source: "/the-importance-of-quality-materials-in-home-remodeling/", destination: "/blog/", permanent: true },
      { source: "/essential-home-maintenance-prevent-costly-repairs-with-regular-attention/", destination: "/blog/", permanent: true },
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/page-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/post-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/local-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/feed/", destination: "/blog/", permanent: true },
      { source: "/comments/feed/", destination: "/blog/", permanent: true },
      { source: "/category/:path*", destination: "/blog/", permanent: true },
      { source: "/author/:path*", destination: "/about/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: false },
      { source: "/wp-content/:path*", destination: "/", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
