function checkCsrfError (err, req, res, next) {
  console.log("csrfMiddleware");
  if(err & err.code === 'EBADCSRFTOKEN') {
    return res.json({error: 'BAD CSRF'});
  }
}

function csrfMiddleware (req, res, next) {
  res.locals.csrfToken = req.csrfToken();
  next();
}

module.exports = { checkCsrfError, csrfMiddleware };