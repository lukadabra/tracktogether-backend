declare namespace NodeJS {
  export interface ProcessEnv {
    // Auth settings
    REDIRECT_URI: string;
    PORT: string;    
    SECRET_KEY: string;
    
    // Deezer
    DEEZER_APP_ID: string;
    DEEZER_APP_SECRET: string;
    DEEZER_CLIENT_ID: string;
    DEEZER_CLIENT_SECRET: string;
    
    // Spotify
    SPOTIFY_APP_ID: string;
    SPOTIFY_APP_SECRET: string;
    SPOTIFY_CLIENT_ID: string;
    SPOTIFY_CLIENT_SECRET: string;
  }
}