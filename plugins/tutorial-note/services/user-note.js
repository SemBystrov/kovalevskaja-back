'use strict';

/**
 * user-note.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

module.exports = {
  /**
   * get UserNote Bookshelf Model
   * @see https://strapi.io/documentation/v3.x/concepts/queries.html#custom-queries
   *
   * @param user - user id
   * @param tutorial - tutorial id
   * @returns {Promise<null|*>}
   */
  async getUserNoteBSModel ({ user, tutorial }) {
    if (user && tutorial) {
      return await strapi.query("user-note", "tutorial-note").model.where({
        user,
        tutorial
      })
    }
    else {
      return null
    }
  },

  async findOne(params, populate) {
    return await strapi.query("user-note", "tutorial-note").findOne(params, populate);
  },

  async delete(params) {
    let userNoteBSModel = await strapi.plugins["tutorial-note"].services["user-note"].getUserNoteBSModel(params)

    if (userNoteBSModel) {
      await userNoteBSModel.destroy({
        require: false
      })
    }
  },

  async save({user, tutorial, content}) {
    let userNoteBSModel = await strapi.plugins["tutorial-note"].services["user-note"].getUserNoteBSModel({
      user,
      tutorial
    })

    if (userNoteBSModel) {
      try {
        await userNoteBSModel.save({content, user, tutorial}, {
          method: "update",
          patch: true
        })
      } catch (e) {
        await userNoteBSModel.save({content, user, tutorial}, {
          method: "insert"
        })
      }
    }
  },
};
