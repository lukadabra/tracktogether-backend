import { getEnv } from "./infrastructures/env/envRepository";

const express = require('express');
const cors = require('cors');
const session = require('express-session');
const fs = require('fs')
const path = require('path')
const env = getEnv();
const port = parseInt(env.port);

import AuthRoutes from './infrastructures/http/routes/AuthRoutes';
import passportSetup from './infrastructures/auth/authStrategiesConfig';
import passport from 'passport'

// setup server
const server = express();

server.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

server.use(cors({
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
}));

server.use(passport.initialize());
server.use(passport.session());

// Configuration des routes
server.use('/auth', AuthRoutes);


server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})