module.exports = ({ env }) => ({
  settings: {
    cors: {
      enabled: true,
      origin: env.array('CORS_ORIGIN')
    }
  }
});
