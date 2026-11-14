import { CarCards } from '../components/carCards.js';
import { loadCarCards } from '../components/carCards.js';

document.getElementById('carCardsWrapper').innerHTML = CarCards({});

await loadCarCards({});
