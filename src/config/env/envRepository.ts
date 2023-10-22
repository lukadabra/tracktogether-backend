import dotenv from 'dotenv';
dotenv.config();

export const getEnv = () => {
    const {
        DEEZER_CLIENT_ID,
        DEEZER_CLIENT_SECRET,
        SPOTIFY_CLIENT_ID,
        SPOTIFY_CLIENT_SECRET,
        REDIRECT_URI,
        PORT,
        DEEZER_APP_ID,
        DEEZER_APP_SECRET,
        SPOTIFY_APP_ID,
        SPOTIFY_APP_SECRET
    } = process.env;

    if (!DEEZER_CLIENT_ID || !DEEZER_CLIENT_SECRET || !SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !REDIRECT_URI ||
        !DEEZER_APP_ID || !DEEZER_APP_SECRET || !SPOTIFY_APP_ID || !SPOTIFY_APP_SECRET || !PORT) {
        throw new Error('Missing required environment variable');
    }

    return {
        deezer: {
            clientId: DEEZER_CLIENT_ID,
            clientSecret: DEEZER_CLIENT_SECRET,
            appId: DEEZER_APP_ID,
            appSecret: DEEZER_APP_SECRET
        },
        spotify: {
            clientId: SPOTIFY_CLIENT_ID,
            clientSecret: SPOTIFY_CLIENT_SECRET,
            appId: SPOTIFY_APP_ID,
            appSecret: SPOTIFY_APP_SECRET
        },
        redirectUri: REDIRECT_URI,
        port: PORT
    };
};
