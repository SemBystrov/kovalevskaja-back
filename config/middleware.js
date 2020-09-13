module.exports = ({ env }) => ({
  //...
  settings: {
    cors: {
      origin: env.array('CORS_ORIGIN')
    }
  }
});
