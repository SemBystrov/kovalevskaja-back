'use strict';

/**
 * `clearMeta` policy.
 */

module.exports = async (ctx, next) => {
  // Add your own logic here.
  console.log('is clearMeta')
  await next();
};
