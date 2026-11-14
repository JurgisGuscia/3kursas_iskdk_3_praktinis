import { CarInfo } from '../components/carInfo.js';

const container = document.getElementById('carInfoContent');
container.innerHTML = CarInfo();

const params = new URLSearchParams(window.location.search);
const carId = Number(params.get('id'));

async function loadCarInfo() {
  try {
    const response = await fetch('./data/cars.json');

    if (!response.ok) {
      throw new Error('Nepavyko užkrauti automobilių duomenų');
    }

    const data = await response.json();

    const car = data.find((car) => car.id === carId);

    if (!car || !params.has('id')) {
      container.innerHTML = '<h2>Automobilis nerastas</h2>';
      return;
    }

    // Main car information
    const carImage = document.getElementById('carImage');
    carImage.src = car.image;
    carImage.alt = car.name;

    document.getElementById('carName').textContent = car.name;

    document.getElementById('carMonthlyPrice').textContent = `nuo ${car.monthlyPrice} € / mėn.`;

    document.getElementById('carDescription').textContent = car.description;

    // Technical specifications
    document.getElementById('carFuel').textContent = car.fuel;

    document.getElementById('carTransmission').textContent = car.transmission;

    document.getElementById('carPower').textContent = `${car.powerKw} kW (${car.powerHp} AG)`;
  } catch (error) {
    console.error('Klaida:', error);
    container.innerHTML = '<h2>Nepavyko užkrauti automobilio informacijos</h2>';
  }
}

loadCarInfo();
