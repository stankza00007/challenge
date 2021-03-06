'use strict'

/*
 * adonis-fold
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

/**
 * This file is used when you are not using lucid
 * with adonis framework, since framework will
 * use the providers.
 */

const _ = require('lodash')
const iocResolver = require('@adonisjs/lucid/lib/iocResolver')
let config = null

/**
 * The config class for using lucid standalone
 */
class Config {
  constructor (map) {
    this._map = map
  }

  get (connection) {
    return _.get(this._map, connection)
  }
}

class Ioc {
  constructor () {
    this._bindings = {}
  }

  bind (name, implementation) {
    this._bindings[name] = implementation
  }

  use (name) {
    return this._bindings[name]
  }

  make (name) {
    return this._bindings[name]
  }
}

class Resolver {
  forDir () {

    return {
        resolveFunc: (handler) => {
            if (typeof handler == 'function') {
                return {
                    method: handler
                }
            } else {
                return {
                    method: () => {
                        console.log("I dont know what to do then..")
                    }
                }
            }
        }
    }

  }
}

const ioc = new Ioc()
const resolver = new Resolver()

iocResolver.setFold({ ioc, resolver })

module.exports = function (configMap) {
  config = new Config({ database: configMap })

  const Database = require('@adonisjs/lucid/src/Database/Manager')
  const Model = require('@adonisjs/lucid/src/Lucid/Model')
  const Schema = require('@adonisjs/lucid/src/Schema')
  const Migration = require('@adonisjs/lucid/src/Migration')
  const Factory = require('@adonisjs/lucid/src/Factory')
  const db = new Database(config)
  ioc.bind('Adonis/Src/Database', db)

  return {
    db,
    Model,
    Schema,
    Migration,
    Factory,
    Models: {
      add (name, implementation) {
        implementation._bootIfNotBooted()
        ioc.bind(`model:${name}`, implementation)
        return this
      },

      get (name) {
        return ioc.use(`model:${name}`)
      },

      clear () {
        _.each(ioc._bindings, (value, name) => {
          if (name.startsWith('model:')) {
            delete ioc._bindings[name]
          }
        })
      }
    }
  }
}
