const fs = require('fs');

const fileName = './models/data.json';
const data = JSON.parse(fs.readFileSync(fileName));

async function persist() {
  return new Promise((res, rej) => {
    fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) => {
      if (err == null) {
        res();
      } else {
        rej(err);
      }
    });
  });
}

function getAll() {
  return data;
}

function getById(id) {
  return data.find((c) => c.id == id);
}

async function createCar(carData) {
  const car = {
    id: createId(),
    brand: carData.brand,
    model: carData.model,
    price: Number(carData.price),
    year: Number(carData.year),
    details: carData.details,
  };

  data.push(car);
  persist();
  return car;
}

function createId() {
  return 'asdf' + ('0000' + ((Math.random() * 9999) | 0)).slice(-4);
}

module.exports = {
  getById,
  createCar,
  getAll,
};
