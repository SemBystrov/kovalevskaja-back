'use strict';

/**
 * user-success.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

module.exports = {
  /**
   * get UserSuccess Bookshelf Model
   * @see https://strapi.io/documentation/v3.x/concepts/queries.html#custom-queries
   *
   * @param user - user id
   * @param tutorial - tutorial id
   * @returns {Promise<null|*>}
   */
  async getUserSuccessBSModel ({ user, tutorial }) {
    if (user && tutorial) {
      return await strapi.query("user-success", "tutorial-note").model.where({
        user,
        tutorial
      })
    }
    else {
      return null
    }
  },
  /*
  async delete(params) {
    let userSuccessBSModel = await strapi.plugins["tutorial-note"].services["user-success"].getUserSuccessBSModel(params)

    if (userSuccessBSModel) {
      await userSuccessBSModel.destroy({
        require: false
      })
    }
  },
  */

  async findOne(params, populate) {
    return await strapi.query("user-success", "tutorial-note").findOne(params, populate);
  },

  async find(params, populate) {
    return await strapi.query("user-success", "tutorial-note").find(params, populate);
  },

  async save({user, tutorial, rating}) {
    let userSuccessBSModel = await strapi.plugins["tutorial-note"].services["user-success"].getUserSuccessBSModel({
      user,
      tutorial
    })

    if (userSuccessBSModel) {
      try {
        await userSuccessBSModel.save({rating, user, tutorial}, {
          method: "update",
          patch: true
        })
      } catch (e) {
        await userSuccessBSModel.save({rating, user, tutorial}, {
          method: "insert"
        })
      }
    }
  },
};