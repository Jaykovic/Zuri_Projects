 const myScreenOutput = document.getElementById('aboutMe');

const firstName = 'James';
const lastName = 'Obekpa';
const country = 'Nigeria';
let height = '5 ft. 8 in.';

myScreenOutput.innerHTML = `<h2> My name is ${firstName} ${lastName} and I'm from ${country} with a height of ${height} </h2>`;

let myDetails = `My name is ${firstName} ${lastName} and I'm from ${country} with a height of ${height}`

console.log(myDetails);