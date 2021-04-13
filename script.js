// Copy to Clipboard

const wrapper = document.querySelector('#hexaWrapper');
const btnCopy = document.querySelector('#copy-clipboard');
const message = document.querySelector('.message')

let copyToClipboard = () => {
    inputColor.select();
    inputColor.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

let messageCopy = () => {
    message.classList.remove('display-none');
};

let messageCopy2 = () => {
    message.classList.add('display-none');
};

btnCopy.addEventListener('click', copyToClipboard);
btnCopy.addEventListener('click', messageCopy);
btnCopy.addEventListener('mouseleave', function () {
    setTimeout(messageCopy2, 2000);
});

// Background generator
const body = document.querySelector('body');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');


bgBody = () => body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
bgBody();
color1.addEventListener('input', bgBody);
color2.addEventListener('input', bgBody);

const textWrapper = document.querySelector('.h-color');
createHexadecimal = () => {
    textWrapper.setAttribute("value",
        `background: linear-gradient(to right, ${color1.value}, ${color2.value});`);
}

color1.addEventListener('input', createHexadecimal);
color2.addEventListener('input', createHexadecimal);

// random Background Gradient Generator

const randomBtn = document.querySelector('#random');

randomNumber = () => Math.floor(Math.random() * 256); // random number between 0 and 255    

function rgbToHex(r, g, b) {
    r = randomNumber().toString(16);
    g = randomNumber().toString(16);
    b = randomNumber().toString(16);
    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;

    return "#" + r + g + b;
}

randomizeColor = () => {
    color1.setAttribute('value', `${rgbToHex()}`)
    color2.setAttribute('value', `${rgbToHex()}`)
}

randomBtn.addEventListener('click', randomizeColor);
randomBtn.addEventListener('click', bgBody);
randomBtn.addEventListener('click', createHexadecimal);