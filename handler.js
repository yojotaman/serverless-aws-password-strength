'use strict';
const verifyPasswordLength = require('./constrainsts/verifyPasswordLength')

module.exports.password = async (event, context) => {
  try {
    const {
      password
    } = event.pathParameters

    await verifyPasswordLength(password)
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'todo ok ' + password
      })
    }

  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `Error ${e.message}`
      })
    }
  }

};