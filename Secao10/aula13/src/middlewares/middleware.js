module.exports = (req, res, next) => {
  console.log("passou no middleware");
  next();
};