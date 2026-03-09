/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'home': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [{"old":"/","type":0,"val":"/","end":""}],
    types: placeholder as Registry['home']['types'],
  },
  'new_account.create': {
    methods: ["GET","HEAD"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.create']['types'],
  },
  'new_account.store': {
    methods: ["POST"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.store']['types'],
  },
  'session.create': {
    methods: ["GET","HEAD"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.create']['types'],
  },
  'session.store': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.store']['types'],
  },
  'session.destroy': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['session.destroy']['types'],
  },
  'admin.games.index': {
    methods: ["GET","HEAD"],
    pattern: '/admin/games',
    tokens: [{"old":"/admin/games","type":0,"val":"admin","end":""},{"old":"/admin/games","type":0,"val":"games","end":""}],
    types: placeholder as Registry['admin.games.index']['types'],
  },
  'admin.games.create': {
    methods: ["GET","HEAD"],
    pattern: '/admin/games/create',
    tokens: [{"old":"/admin/games/create","type":0,"val":"admin","end":""},{"old":"/admin/games/create","type":0,"val":"games","end":""},{"old":"/admin/games/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['admin.games.create']['types'],
  },
  'admin.games.store': {
    methods: ["POST"],
    pattern: '/admin/games',
    tokens: [{"old":"/admin/games","type":0,"val":"admin","end":""},{"old":"/admin/games","type":0,"val":"games","end":""}],
    types: placeholder as Registry['admin.games.store']['types'],
  },
  'admin.games.destroy': {
    methods: ["DELETE"],
    pattern: '/admin/games/:id',
    tokens: [{"old":"/admin/games/:id","type":0,"val":"admin","end":""},{"old":"/admin/games/:id","type":0,"val":"games","end":""},{"old":"/admin/games/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['admin.games.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
