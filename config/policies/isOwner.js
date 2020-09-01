'use strict';

/**
 * `isOwner` policy.
 */

module.exports = async (ctx, next) => {
  // Add your own logic here.
  console.log('In isOwner policy.');
  console.log(ctx)
  console.log(next)
  await next();
  console.log(ctx.response)
};
