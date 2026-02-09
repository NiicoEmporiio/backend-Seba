export default [
  "strapi::errors",

  {
    name: "strapi::cors",
    config: {
      origin: [
        "https://niicoemporiio.github.io",
        "http://localhost:5500",
        "http://127.0.0.1:5500",
        "http://localhost:1337",
        "https://backend-seba-b9yi.onrender.com",
        /^https:\/\/.*\.ngrok-free\.dev$/,
      ],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      headers: [
        "Content-Type",
        "Authorization",
        "Origin",
        "Accept",
      ],
      credentials: true,
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
