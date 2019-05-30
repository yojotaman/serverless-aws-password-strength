'use strict';


const {
  verifyPasswordLength,
  verifyPasswordStrength
} = require('./constrainsts')

module.exports.password = async (event, context) => {
  try {
    const {
      password
    } = event.pathParameters

    await verifyPasswordLength(password)
    const {
      score
    } = await verifyPasswordStrength(password)
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Password score: ${score}`
      })
    }

  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `Error ${e.message}`,
        score: e.score
      })
    }
  }

};