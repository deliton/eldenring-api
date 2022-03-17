module.exports = {
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: 'https://raw.githubusercontent.com/deliton/eldenring-api/main/resources/images/:path*'
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
