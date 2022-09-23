const { create } = require('express-handlebars');

const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('create', {
    title: 'Create new listing',
  });
});

router.post('/', async (req, res) => {
  try {
    const result = create(req.body);
    res.redirect('/catalog/' + result.id);
  } catch (err) {
    res.render('create', {
      title: 'request error',
      error: err.message.split('\n'),
    });
  }
});

module.exports = router;
