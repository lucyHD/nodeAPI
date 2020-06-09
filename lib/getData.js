const fetch = require('node-fetch');

const url = 'https://official-joke-api.appspot.com/jokes/programming/random'


const getCats = async ()=>{
    let data = await fetch(url); 
    return await data.json();

}

getCats();

module.exports = getCats; 