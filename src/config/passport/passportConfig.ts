
import fastifyPassport from '@fastify/passport';
import { Strategy as DeezerStrategy } from 'passport-deezer';
import { Strategy as SpotifyStrategy } from 'passport-spotify';
import { getEnv } from '../env/envRepository'

const env = getEnv();

fastifyPassport.use(new DeezerStrategy({
    clientID: env.deezer.clientId,
    clientSecret: env.deezer.clientSecret,
    callbackURL: "http://localhost:5000/auth/deezer/callback",
    scope: ['basic_access','email', 'manage_library', 'delete_library', 'listening_history']
}, (accessToken, refreshToken, profile, done) => {
    done(null, profile)
  }
));

fastifyPassport.use(new SpotifyStrategy({
    clientID: env.spotify.clientId,
    clientSecret: env.spotify.clientSecret,
    callbackURL: "http://localhost:5000/auth/spotify/callback",
    scope: ['user-read-email', 'user-read-private']
}, (accessToken, refreshToken, expires_in, profile, done) => {
    // stocker les informations du profil dans la session utilisateur
    done(null, profile);
}));

export default fastifyPassport;
