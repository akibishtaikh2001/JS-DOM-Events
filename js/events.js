// option 1: directly set on the HTML element

// option 2: add onclick function
function makered() {
    document.body.style.backgroundColor = 'red';
}

// option : 3
const makeBlueButton = document.getElementById('make_blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option: 3 another
const purpleButton = document.getElementById('make_purple');
console.log(purpleButton);
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}