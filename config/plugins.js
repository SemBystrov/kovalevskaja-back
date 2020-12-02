module.exports = ({ env }) => ({
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: env('CLOUDINARY_NAME'),
      api_key: env('CLOUDINARY_KEY'),
      api_secret: env('CLOUDINARY_SECRET'),
    },
  },
  email: {
    provider: 'sendmail',
    settings: {
      defaultFrom: env('MAIL_FROM'),
      defaultReplyTo: env('MAIL_REPLY_TO')
    },
  }
});
