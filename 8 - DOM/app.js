const user = {
    name: null,
    age: null
}

document.getElementById('userName').addEventListener('input', () => {
    user.name = document.getElementById('userName').value;
    if(user.name.length >= 2){
        document.getElementById('userAgeContainer').style.display = 'block';
    } else {
        document.getElementById('userAgeContainer').style.display = 'none';
    }
})

document.getElementById('userAge').addEventListener('input', () => {
    user.age = Number(document.getElementById('userAge').value);
    if(user.age >= 18 && user.name.length >= 2){
        document.getElementById('submitButton').style.display = 'block';
    } else {
        document.getElementById('submitButton').style.display = 'none';
    }
})


document.getElementById('submitButton').addEventListener('click', () => {
    alert(`${user.name}, ${user.age}`)
});

document.getElementById('redButton').addEventListener('click', () => {
    document.body.style.backgroundColor = 'red'
})

document.getElementById('greenButton').addEventListener('click', () => {
    document.body.style.backgroundColor = 'green'
})

document.getElementById('blueButton').addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue'
})