'use strict';

// select HTML Elements

// input
const firstName = document.body.querySelector('#input__first');
const lastName = document.body.querySelector('#input__last');
const category = document.body.querySelector('#input__category');

// other
const formSub = document.body.querySelector('.input__form');
const outJoke = document.body.querySelector('.joke');

const inputObj = () => {
    const obj = {
        firstName: firstName.value,
        lastName: lastName.value,
        category: category.value
    }
    console.log(obj);
    return obj;
}

const createLink = (inpObj) => {
    return `http://api.icndb.com/jokes/random?firstName=${inpObj.firstName}&lastName=${inpObj.lastName}${inpObj.category != 'random' ? `&limitTo=[${inpObj.category}]` : ''}`;
}

const getJoke = async (link) => {
    const response = await fetch(link)
    const jsonObj = await response.json();
    return jsonObj;
}

const outputSite = (joke) => {
    outJoke.innerHTML = `<span>${joke}</span>`
}

const createJoke = async () => {
    const obj = inputObj();
    const link = createLink(obj);
    const jsonObj = await getJoke(link);
    outputSite(jsonObj.value.joke)
}

// Event Listener

formSub.addEventListener('submit',e => {
    e.preventDefault();
    createJoke();
});