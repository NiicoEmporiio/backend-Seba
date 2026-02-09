export default [
  "strapi::errors",

  {
    name: "strapi::cors",
    config: {
      origin: [
        "https://niicoemporiio.github.io"
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      headers: ["Content-Type", "Authorization"],
      credentials: false,
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
