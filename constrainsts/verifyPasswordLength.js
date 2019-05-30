module.exports = password => {
    if (password.length < 6) {
        return Promise.reject({
            message: 'La contraseña es demasiado corta'
        })
    }
    return Promise.resolve('La contraseña ha pasado la prueba de validación')
}