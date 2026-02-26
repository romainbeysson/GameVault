import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'

export default class extends BaseSeeder {
  async run() {
    const email = 'admin@test.com'
    const password = 'password'
    const fullName = 'Admin'

    try {
      // Supprime tout admin existant (sécurité)
      await User.query().where('email', email).delete()
      const user = await User.create({
        email,
        password: await hash.make(password),
        fullName,
      })
      console.log('Admin créé:', user.email)
    } catch (err) {
      console.error('Erreur lors de la création de l\'admin:', err)
    }
  }
}
