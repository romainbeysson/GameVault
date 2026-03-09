/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

const GamesController = () => import('#controllers/games_controller')
const SessionController = () => import('#controllers/session_controller')
const NewAccountController = () => import('#controllers/new_account_controller')

// Page d'accueil avec liste des jeux (accessible à tous)
router.get('/', [GamesController, 'index']).as('home')

// Routes d'authentification (invités uniquement)
router
  .group(() => {
    router.get('signup', [NewAccountController, 'create']).as('new_account.create')
    router.post('signup', [NewAccountController, 'store']).as('new_account.store')

    router.get('login', [SessionController, 'create']).as('session.create')
    router.post('login', [SessionController, 'store']).as('session.store')
  })
  .use(middleware.guest())

// Routes authentifiées
router
  .group(() => {
    router.post('logout', [SessionController, 'destroy']).as('session.destroy')
  })
  .use(middleware.auth())

// Routes admin pour la gestion des jeux (authentification requise)
router
  .group(() => {
    router.get('/', [GamesController, 'adminIndex']).as('admin.games.index')
    router.get('/create', [GamesController, 'create']).as('admin.games.create')
    router.post('/', [GamesController, 'store']).as('admin.games.store')
    router.delete('/:id', [GamesController, 'destroy']).as('admin.games.destroy')
  })
  .prefix('/admin/games')
  .use(middleware.auth())
