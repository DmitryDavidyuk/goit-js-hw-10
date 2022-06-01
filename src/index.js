import './css/styles.css';


const debounce = require('lodash.debounce');
// import {fetchCountries} from './fetchCountries'/

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('input#search-box');

function fetchCountries(name){
    fetch(`https://restcountries.com/v3.1/name/${name}?fields=capital,name,population,flags,languages`)
    .then(response => response.json())
    .then(countrie => {
        console.log(countrie);
        const mercup = mercupList(countrie)
        console.log(mercup);
    })
}

input.addEventListener('input', debounce((evt) => {
    if(evt.target.value === ""){
        // придумать очистку
        return
    }
    fetchCountries(evt.target.value);
}, DEBOUNCE_DELAY) )

// fetchCountries('ukraine');



function mercupList(countries){
    countries.map(({flags, name}) => {
    return `<li>
    <img src="${flags.svg}" alt="${name.official}" width="60px" height="60px"/>
    <p>${name.official}</p>
    </li>`})
}