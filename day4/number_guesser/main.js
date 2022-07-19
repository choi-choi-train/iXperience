const answer=Math.floor(Math.random()*10);

function checkanswer() {
    // document.getElementById('dialogue').innertext = 'INCORRECT, your guess is too high';
    const input = document.getElementById('guess').value;
    document.getElementById('result').innerText = input;
    if (input < 0) {
        document.getElementById('result').innerText = 'Answer is too small, please give a number between 0 and 10';
    }
    if (input > 10) {
        document.getElementById('result').innerText = 'Answer is too large, please give a number between 0 and 10';
    }
    if (input == answer) {
        document.getElementById('result').innerText = '🎉 CORRECT! 🎉';
    }
    else if (input < answer) {
        document.getElementById('result').innerText = 'INCORRECT, your guess is too low';
    }
    else if (input > answer) {
        document.getElementById('result').innerText = 'INCORRECT, your guess is too high';
    }
}