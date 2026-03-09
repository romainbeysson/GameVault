import hash from '@adonisjs/core/services/hash'

const password = 'password'
const hashed = await hash.make(password)
console.log('Hash scrypt pour "password":')
console.log(hashed)
