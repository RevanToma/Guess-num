const h1 = document.querySelector('h1');
const guessBtn = document.querySelector('#guess');
const previousGuesses = document.querySelector('#previousGuesses');
const again = document.querySelector('#again');
let input = document.querySelector('#input').value;


// skriva ut siffran som skrivs in i inputfältet när man trycker på knappen 'Guess';

// guessCounter = 0;
let radnomNum = Math.floor(Math.random() * 100);
guessCounter = 0;

guessBtn.addEventListener('click', () => {
    const high = '(num to high)';
    const low = '(num to low)';
    let input = document.querySelector('#input').value;
    if (input < 1 || input > 100) {
        h1.innerHTML = 'Please enter a number between 1- 100';

    }
    else if (input == radnomNum) {
        h1.innerHTML = `You guessed right, your number was: ${radnomNum}`
        guessBtn.setAttribute('disabled', '');

    }
    else if (input < radnomNum) {
        h1.innerHTML = 'You guessed to low!'
        createLi(`${input} ${low}`);
        guessCounter++;
        guessIncrement(guessCounter);

    } else if (input > radnomNum) {
        h1.innerHTML = 'You guessed to high!';
        createLi(`${input} ${high}`);
        guessCounter++;
        guessIncrement(guessCounter);

    } else if (input > 100) {
        h1.innerHTML = 'Number must be between 1-100';

    } else {

        alert('Please enter a number and not a text');
        location.reload();
    }
});
again.addEventListener('click', () => {
    location.reload();
})


// create a list to show previous guesses.
function createLi(input) {
    const li = document.createElement('li');
    li.textContent = input;
    previousGuesses.appendChild(li);
}
// increase the guess counter and if reached max guesses allowed = game over.
function guessIncrement(guessCounter) {
    if (guessCounter === 5) {
        guessBtn.setAttribute('disabled', '');
        h1.textContent = 'You lost! play again if you dare!';
        h1.style.color = 'red';
    }
}