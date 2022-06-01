
const list = document.querySelector('.country-list');
 

  export const renderCountries = arrCountries => {
    let markup = '';
    if (arrCountries.length === 1) {
      markup = arrCountries
        .map(({ name, capital, population, flags, languages }) => {
          return `<li>
        <p class="name"><img src="${flags.svg}" alt="flag" width ="40"> ${name.official}</p>
           <p><span>Capital:</span> ${capital}</p>
            <p><span>Population:</span> ${population}</p>
            <p><span>Languages:</span> ${Object.values(languages)}</p>
          </li>`;
        })
        .join('');
    } else if (arrCountries.length <= 10 && arrCountries.length != '') {
      markup = arrCountries
        .map(({ name, flags }) => {
          return `<li>
        <p><img src="${flags.svg}" alt="flag" width ="30"> ${name.official}</p>
          </li>`;
        })
        .join('');
    } else if (arrCountries.length > 10) {
      markup = `<li></li>`;
    }
  
    list.innerHTML = markup;
  };