import { Navbar } from '../components/navbar.js';
import { Header } from '../components/header.js';
import { WhyUs } from '../components/whyUs.js';
import { Calculator } from '../components/calculator.js';
import { ContactUs } from '../components/contactUs.js';
import { WhyUsDash } from '../components/whyUsDash.js';
import { NewsLetter } from '../components/newsLetter.js';
import { Footer } from '../components/footer.js';
import { initCalculator } from './calculator.js';

document.getElementById('navbar').innerHTML = Navbar();
document.getElementById('header').innerHTML = Header();
document.getElementById('whyUsWrapper').innerHTML = WhyUs();
document.getElementById('contactUsDash').innerHTML = ContactUs();
document.getElementById('whyUsDash').innerHTML = WhyUsDash();
document.getElementById('newsLetterWrapper').innerHTML = NewsLetter();
document.getElementById('footer').innerHTML = Footer();
document.getElementById('calculatorWrapper').innerHTML = Calculator();
initCalculator();
