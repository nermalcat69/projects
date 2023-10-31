const siteUrl = "https://nermalcat69.vercel.app/";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    additionalPaths: async (config) => [
      await config.transform(config, "/comments"),
    ],
   
  },
};