const zxcvbn = require('zxcvbn')

module.exports = password => {

    const score = zxcvbn(password).score
    if (score < 2) {
        return Promise.reject({
            message: 'La contraseña es demasiado debil',
            score
        })
    }
    return Promise.resolve({
        message: 'La contraseña ha pasado validación de fortaleza',
        score
    })

}