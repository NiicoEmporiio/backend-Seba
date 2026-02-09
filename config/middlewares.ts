export default [
  "strapi::errors",

  {
    name: "strapi::cors",
    config: {
      origin: [
        "https://niicoemporiio.github.io",
        "http://localhost:5173",
        "http://localhost:3000",
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      headers: [
        "Content-Type",
        "Authorization",
        "Origin",
        "Accept",
      ],
      credentials: false,
      keepHeaderOnError: true,
    },
  },

  "strapi::security",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
