'use strict';

// select HTML Elements

// input
const firstName = document.body.querySelector('#input__first');
const lastName = document.body.querySelector('#input__last');
const category = document.body.querySelector('#input__category');

// other
const formSub = document.body.querySelector('.input__form');
const outJoke = document.body.querySelector('.joke');

// const inputObj = () => {
//     const obj = {
//         firstName: firstName.value,
//         lastName: lastName.value,
//         category: category.value
//     }
//     console.log(obj);
//     return obj;
// }

const createLink = () => {
    return `https://api.chucknorris.io/jokes/random${category.value != 'random' ? `?category=${category.value}` : ''}`;
}

const getJoke = async (link) => {
    const response = await fetch(link)
    const jsonObj = await response.json();
    return jsonObj;
}

const outputSite = (joke) => {
    const replacedJoke = joke.replaceAll('Chuck',firstName.value).replaceAll('Norris',lastName.value);
    outJoke.innerHTML = `<span>${replacedJoke}</span>`
}

const createJoke = async () => {
    // const obj = inputObj();
    const link = createLink();
    const jsonObj = await getJoke(link);
    outputSite(jsonObj.value)
}

// Event Listener

formSub.addEventListener('submit',e => {
    e.preventDefault();
    createJoke();
});