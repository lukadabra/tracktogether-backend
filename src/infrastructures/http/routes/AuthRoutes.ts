import { Router } from 'express';
import passport from "../../auth/authStrategiesConfig";
import { getEnv } from "../../env/envRepository";
import { log } from 'console'
const env = getEnv();

const AuthRoutes = Router()
// Routes pour l'authentification
AuthRoutes.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'user failed to authenticate.'
  });
});

AuthRoutes.get('/login/success', (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: 'user has successfully authenticated.',
      user: req.user
    });
  }
})

AuthRoutes.get('/logout', function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

AuthRoutes.get('/deezer', passport.authenticate('deezer'))
AuthRoutes.get('/deezer/callback', passport.authenticate('deezer', { successRedirect: `${env.redirectUri}`, failureRedirect: `${env.redirectUri}` }))

AuthRoutes.get('/spotify', passport.authenticate('spotify'))
AuthRoutes.get('/spotify/callback', passport.authenticate('spotify', { successRedirect: `${env.redirectUri}`, failureRedirect: `/login/failed` }))

export default AuthRoutes