module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '04ae03333294f941c92031b33dedacc6'),
    },
  },
});
