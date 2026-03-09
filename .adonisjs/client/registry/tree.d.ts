/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  home: typeof routes['home']
  newAccount: {
    create: typeof routes['new_account.create']
    store: typeof routes['new_account.store']
  }
  session: {
    create: typeof routes['session.create']
    store: typeof routes['session.store']
    destroy: typeof routes['session.destroy']
  }
  admin: {
    games: {
      index: typeof routes['admin.games.index']
      create: typeof routes['admin.games.create']
      store: typeof routes['admin.games.store']
      destroy: typeof routes['admin.games.destroy']
    }
  }
}
