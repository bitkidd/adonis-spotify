'use strict'

const { ServiceProvider } = require('@adonisjs/fold')
const SpotifyWebApi = require('spotify-web-api-node')

class SpotifyProvider extends ServiceProvider {
  register () {
    this.app.singleton('Adonis/Addons/Spotify', (app) => {
      const Env = app.use('Adonis/Src/Env')
      const clientId = Env.get('STRIPE_API_KEY')
      const clientSecret = Env.get('STRIPE_API_KEY')
      const spotifyInstance = new SpotifyWebApi({ clientId, clientSecret })

      return spotifyInstance
    })

    this.app.alias('Adonis/Addons/Spotify', 'Spotify')
  }
}

module.exports = SpotifyProvider
