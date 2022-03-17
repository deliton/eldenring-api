module.exports = {
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: 'https://res.cloudinary.com/onifex/image/upload/v1646794966/eldenring-api/:path*'
      }
    ]
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "cache-control",
            value: "s-maxage=3600, stale-while-revalidate",
          },
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,POST" },
          {
            key: "Access-Control-Allow-Headers",
            value: "Origin, X-Requested-With, Content-Type, Accept",
          },
        ],
      },
    ];
  },
};
