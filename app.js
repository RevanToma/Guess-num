const container = document.querySelector('.container');
const h1 = document.querySelector('h1');
const guessBtn = document.querySelector('#guess');
const previousGuesses = document.querySelector('#previousGuesses');
const again = document.querySelector('#again');


// skriva ut siffran som skrivs in i inputfältet när man trycker på knappen 'Guess';



let radnomNum = Math.floor(Math.random() * 100);


guessBtn.addEventListener('click', () => {
    let guessNum = document.querySelector('#guessNum').value;
    if (guessNum < 1 || guessNum > 100) {
        h1.innerHTML = 'Please enter a number between 1- 100';
    }
    else if (guessNum == radnomNum) {
        h1.innerHTML = `You guessed right, your number was ${radnomNum}`


    }
    else if (guessNum < radnomNum) {
        h1.innerHTML = 'You guessed to low!'
        previousGuesses.textContent = guessNum;

    } else if (guessNum > radnomNum) {

        h1.innerHTML = 'You guessed to high!';
        previousGuesses.textContent = guessNum;
    } else if (guessNum > 100) {
        h1.innerHTML = 'Number must be between 1-100';
    } else {

        alert('Please enter a number and not a text');
        location.reload();
    }
});
again.addEventListener('click', () => {
    location.reload();
})

