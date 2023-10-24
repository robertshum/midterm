/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router = express.Router();

// Example http://localhost:8080/users/logout
router.get('/logout', (req, res) => {
  if (!req.session.userId) {
    res.status(200).json({ message: 'Nothing to log out from, user was never signed in.' });
    return;
  }

  const userId = req.session.userId;
  req.session = null;
  res.status(200).json({ message: `Successfully logged out from user: ${userId}` });
});

// Example http://localhost:8080/users/1
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  req.session.userId = userId;
  res.status(200).json({ message: `Successfully logged in to user: ${req.session.userId}` });
});

module.exports = router;
