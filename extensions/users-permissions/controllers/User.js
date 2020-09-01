// users/me with media and relational fields
const { sanitizeEntity, parseMultipartData } = require('strapi-utils');

const sanitizeUser = user =>
  sanitizeEntity(user, {
    model: strapi.query('user', 'users-permissions').model,
  });


module.exports = {
  async me(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.badRequest(null, [{ messages: [{ id: 'No authorization header was found' }] }]);
    }

    const userQuery = await strapi.query('user', 'users-permissions');
    const userWithMedia = await userQuery.findOne({ id: ctx.state.user.id });

    const data = sanitizeUser(userWithMedia, { model: userQuery.model });
    ctx.send(data);
  },
  async updateMe (ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.badRequest(null, [{ messages: [{ id: 'No authorization header was found' }] }]);
    }

    if (ctx.is('multipart')){
      const { data, files } = parseMultipartData(ctx);

      const userQuery = await strapi.query('user', 'users-permissions');

      const entry = await userQuery.update({id: user.id}, data);

      if (files) {
        await strapi.entityService.uploadFiles(entry, files, {
          model: 'user',
          source: 'users-permissions'
        });
      }

      ctx.status = 204
    }
  }
};
