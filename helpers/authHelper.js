module.exports = {
  ensureAuthenticated(req, res, next) {
    res.json({ test: 'test' });
    /* if (req.isAuthenticated()) {
      return next();
    } */
  },
};
