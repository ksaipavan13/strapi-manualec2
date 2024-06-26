module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'someSecretKey'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', '5iF0VSYhtob7QK3vlwG/vA=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'vIVOjR/MbqNtViT6UuvfHQ=='),
    },
  },
});
