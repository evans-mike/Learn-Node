exports.myMiddlware = (req, res, next) => {
  req.name = 'Mike';
  next();
};

exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index');
};