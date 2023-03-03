// MOUSE
document.getElementById('counterButton').addEventListener('click', () => {
    let currentValue = Number(document.getElementById('counterButton').innerHTML);
    currentValue++;
    document.getElementById('counterButton').innerHTML = currentValue;
    console.log('click');
})

document.getElementById('counterButton').addEventListener('dblclick', () => {
    let currentValue = Number(document.getElementById('counterButton').innerHTML);
    currentValue-=2;
    document.getElementById('counterButton').innerHTML = currentValue;
    console.log('double click');
})

document.getElementById('superButton').addEventListener('mousemove', () => {
    let currentValue = Number(document.getElementById('superButton').innerHTML);
    currentValue++;
    document.getElementById('superButton').innerHTML = currentValue;
})
// KEYBOARD
document.getElementById('superInput').addEventListener('keydown', () => {
    console.log('key down event');
})

document.getElementById('superInput').addEventListener('keyup', () => {
    console.log('key up event');
})

document.getElementById('superInput').addEventListener('keypress', () => {
    console.log('key press event');
})

document.getElementById('superInput').addEventListener('input', () => {
    console.log('input event');
})

document.getElementById('keyCodeHandle').addEventListener('keydown', (event) => {
    console.log(event.key);
    console.log(event.keyCode);
})



// FOCUS, BLUR
document.getElementById('focusHandle').addEventListener('focus', () => {
    console.log('focus event');
})

document.getElementById('focusHandle').addEventListener('blur', () => {
    console.log('blur event');
})

// TIME
setTimeout(() => {
    document.body.style.backgroundColor = 'yellow';
}, 1000);

const colors = ['red', 'green', 'blue'];

let colorIndex = 0;
setInterval(() => {
    if(colorIndex < colors.length -1){
        colorIndex++;
    } else {
        colorIndex = 0;
    }
    document.body.style.backgroundColor = colors[colorIndex];
    
}, 20)