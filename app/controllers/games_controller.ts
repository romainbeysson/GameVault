import type { HttpContext } from '@adonisjs/core/http'
import Game from '#models/game'

export default class GamesController {
  /**
   * Liste des jeux (page d'accueil)
   */
  async index({ inertia }: HttpContext) {
    const games = await Game.query().orderBy('title', 'asc')
    return inertia.render('home', { games })
  }

  /**
   * Formulaire d'ajout de jeu (admin)
   */
  async create({ inertia }: HttpContext) {
    return inertia.render('admin/games/create', {})
  }

  /**
   * Enregistrement d'un nouveau jeu
   */
  async store({ request, response, session }: HttpContext) {
    const data = request.only(['title', 'description', 'genre', 'platform', 'imageUrl', 'releaseYear'])

    await Game.create({
      title: data.title,
      description: data.description || null,
      genre: data.genre || null,
      platform: data.platform || null,
      imageUrl: data.imageUrl || null,
      releaseYear: data.releaseYear ? parseInt(data.releaseYear) : null,
    })

    session.flash('success', 'Jeu ajouté avec succès !')
    return response.redirect().toRoute('admin.games.index')
  }

  /**
   * Liste des jeux (admin)
   */
  async adminIndex({ inertia }: HttpContext) {
    const games = await Game.query().orderBy('created_at', 'desc')
    return inertia.render('admin/games/index', { games })
  }

  /**
   * Suppression d'un jeu
   */
  async destroy({ params, response, session }: HttpContext) {
    const game = await Game.findOrFail(params.id)
    await game.delete()
    session.flash('success', 'Jeu supprimé !')
    return response.redirect().toRoute('admin.games.index')
  }
}
