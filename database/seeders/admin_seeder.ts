import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    const email = 'admin@test.com'
    const password = 'password'
    const fullName = 'Admin'

    try {
      // Supprime tout admin existant (sécurité)
      await User.query().where('email', email).delete()
      // Le modèle User avec withAuthFinder hash automatiquement le password
      const user = await User.create({
        email,
        password,
        fullName,
      })
      console.log('Admin créé:', user.email)
    } catch (err) {
      console.error('Erreur lors de la création de l\'admin:', err)
    }
  }
}
