import fastify from 'fastify';
import cors from "@fastify/cors";
import formDataPlugin from "@fastify/formbody";
import fastifySecureSession from '@fastify/secure-session';
import { getEnv } from "./config/env/envRepository";
import fastifyPassport from "./config/passport/passportConfig";

const fs = require('fs')
const path = require('path')

// const
const env = getEnv();
const port = parseInt(env.port);

// setup server
const server = fastify({
  logger: true
});
// set up secure sessions for @fastify/passport to store data in
server.register(fastifySecureSession, { key: fs.readFileSync(path.join(__dirname, 'secret-key')) })
// initialize @fastify/passport and connect it to the secure-session storage. Note: both of these plugins are mandatory.
server.register(fastifyPassport.initialize())
server.register(fastifyPassport.secureSession())
server.register(formDataPlugin);
server.register(cors, {
  origin: true,  // autoriser toutes les origines, ou spécifier une liste d'origines autorisées
});

// Routes pour l'authentification
server.get('/auth/deezer', fastifyPassport.authenticate('deezer'));
server.get('/auth/deezer/callback', fastifyPassport.authenticate('deezer', { successRedirect: '/', failureRedirect: '/login' }));

server.get('/auth/spotify', fastifyPassport.authenticate('spotify'));
server.get('/auth/spotify/callback', fastifyPassport.authenticate('spotify', { successRedirect: '/', failureRedirect: '/login' }));



(async () => {
  await server.listen({ port }, (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server listening at ${address}`)
  })
})();