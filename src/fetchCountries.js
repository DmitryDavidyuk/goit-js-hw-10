export function fetchCountries(name){
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => response.json())
    .then(countrie => {
        console.log(countrie);
    })
}