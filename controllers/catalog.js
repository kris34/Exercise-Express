const { getById, getAll } = require('../services/carService');

const router = require('express').Router();

 router.get('/', (req, res) => {
  const cars = getAll();
  res.render('catalog', {
    cars,
  });
}); 

 router.get('/:id', (req, res) => {
  const carId = req.params.id;
  const car = getById(carId);

  if (car) {
    res.render('details', {
      title: 'Car Details',
      car,
    });
  } else {
    res.render('carNotFound', {
      title: 'Car Details',
      carId,
    });
  }
}); 
 
module.exports = router;
