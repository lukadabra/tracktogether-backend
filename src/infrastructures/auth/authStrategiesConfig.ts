
import passport from 'passport'
import { Strategy as DeezerStrategy } from 'passport-deezer'
import { Strategy as SpotifyStrategy } from 'passport-spotify'
import { getEnv } from '../env/envRepository'

const env = getEnv()

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user as Express.User)
})


passport.use(new DeezerStrategy({
    clientID: env.deezer.clientId,
    clientSecret: env.deezer.clientSecret,
    callbackURL: env.redirectUri,
    scope: ['basic_access', 'email', 'manage_library', 'delete_library', 'listening_history']
}, (accessToken, refreshToken, profile, done) => {
    done(null, profile)
}
))

passport.use(new SpotifyStrategy({
    clientID: env.spotify.clientId,
    clientSecret: env.spotify.clientSecret,
    callbackURL: "/auth/spotify/callback",
    scope: ['user-read-email', 'user-read-private']
}, (accessToken, refreshToken, expires_in, profile, done) => {
    done(null, profile)
}))

export default passport
