const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const mike = {name: 'Mike', age: 32, cool: true};
  // res.send('Hey! It works!');
  // res.json(mike);
  // res.send(req.query.name);
  // res.json(req.query);
  res.render('hello', {
    name: 'mike',
    dog: 'Snickers'
  });
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

// See for more details https://expressjs.com/en/guide/routing.html

module.exports = router;
