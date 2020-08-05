module.exports = function(req, res, route) {
     const file = (route);
     res.download(file);
}