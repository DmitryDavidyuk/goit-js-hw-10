import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { fetchCountries } from './fetchCountries.js';
import { renderCountries } from './renderCountries.js';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('input#search-box');
const list = document.querySelector('.country-list')
const info = document.querySelector('.country-info')

input.addEventListener('input', debounce(event => {
    inputCountry(event);
    }, DEBOUNCE_DELAY),
  );

function inputCountry(event) {
    const inputText = event.target.value.trim();
    if (inputText === '') {
      return (list.innerHTML = ''), (info.innerHTML = '')
    }

    return fetchCountries(inputText)
      .then(data => {
        if (data.length > 10) {
          Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        }
        renderCountries(data);
      })
      .catch(error => {
        Notiflix.Notify.failure('Oops, there is no country with that name');
        renderCountries('');
      });
  }

