'use strict';

/**
 * user-note.js controller
 *
 * @description: A set of functions called "actions" of the `tutorial-note` plugin.
 */

module.exports = {
  async getUserNote(ctx) {

    console.log('get user-note by tutorial')

    const params = {
      user: ctx.state.user.id,
      tutorial: ctx.params.tutorial
    }

    if (params.user && params.tutorial) {
      let userNote = await strapi.plugins["tutorial-note"].services["user-note"].findOne(params, [])

      if (userNote) {
        return userNote
      }
    }
  },

  async getUserSuccess(ctx) {

    console.log('get user-success by tutorial')

    const params = {
      user: ctx.state.user.id,
      tutorial: ctx.params.tutorial
    }

    if (params.user && params.tutorial) {
      let userSuccess = await strapi.plugins["tutorial-note"].services["user-success"].findOne(params, [])

      if (userSuccess) {
        return userSuccess
      }
    }
  },

  async getAllUserSuccess(ctx) {

    console.log('get all user-success by user')

    const params = {
      user: ctx.state.user.id
    }

    if (params.user) {
      let userAllSuccess = await strapi.plugins["tutorial-note"].services["user-success"].find(params, [])

      if (userAllSuccess) {
        return userAllSuccess
      }
    }
  },

  async deleteUserNote(ctx) {

    console.log('delete user-note by tutorial')

    let params = {
      user: ctx.state.user.id,
      tutorial: ctx.params.tutorial
    }

    if (params.user && params.tutorial) {
      await strapi.plugins["tutorial-note"].services["user-note"].delete(params)

      ctx.response.status = 200
    }
  },

  async saveUserNote(ctx) {

    console.log('save user-note by tutorial')

    let params = {
      user: ctx.state.user.id,
      tutorial: ctx.params.tutorial,
      content: ctx.request.body.content || ""
    }

    if (params.user && params.tutorial) {
      await strapi.plugins["tutorial-note"].services["user-note"].save(params)

      ctx.response.status = 200
    }
  },

  async saveUserSuccess(ctx) {

    console.log('save user-success by tutorial')

    let params = {
      user: ctx.state.user.id,
      tutorial: ctx.params.tutorial,
      rating: ctx.request.body.rating || -1
    }

    if (params.user && params.tutorial) {
      await strapi.plugins["tutorial-note"].services["user-success"].save(params)

      ctx.response.status = 200
    }
  }
};
