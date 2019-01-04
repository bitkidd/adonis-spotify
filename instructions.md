## Registering provider

Make sure to register the provider inside `start/app.js` file.

```js
const providers = [
  'adonis-spotify/providers/SpotifyProvider'
]
```

That's all! Now you can use the provider by pulling it from IoC container

```js
const Spotify = use('Spotify')

const data = await Spotify.searchTracks('Pompeya - 90')

```

## Env variables

The `Spotify` service provider relies on two ENV variables: 
- `SPOTIFY_CLIENT_ID=`
- `SPOTIFY_CLIENT_SECRET=`
