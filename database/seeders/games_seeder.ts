import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Game from '#models/game'

export default class extends BaseSeeder {
  async run() {
    await Game.createMany([
      {
        title: 'Resident Evil 4',
        description: 'Survival horror classique de Capcom',
        genre: 'Survival Horror',
        platform: 'PC, PS5, Xbox',
        releaseYear: 2023,
      },
      {
        title: 'Valorant',
        description: 'FPS tactique free-to-play de Riot Games',
        genre: 'FPS',
        platform: 'PC',
        releaseYear: 2020,
      },
      {
        title: 'Counter-Strike 2',
        description: 'Le célèbre FPS compétitif de Valve',
        genre: 'FPS',
        platform: 'PC',
        releaseYear: 2023,
      },
    ])
    console.log('Jeux de démo créés !')
  }
}
