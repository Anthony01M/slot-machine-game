document.getElementById('spinButton').addEventListener('click', spin);

const symbols = ['🍒', '🍋', '🍊', '🍉', '🍇', '🍓'];

function spin() {
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');

    animateReel(reel1, 1000);
    animateReel(reel2, 1500);
    animateReel(reel3, 2000);

    setTimeout(() => {
        reel1.textContent = getRandomSymbol();
    }, 1000);

    setTimeout(() => {
        reel2.textContent = getRandomSymbol();
    }, 1500);

    setTimeout(() => {
        reel3.textContent = getRandomSymbol();
        checkWin(reel1.textContent, reel2.textContent, reel3.textContent);
    }, 2000);
}

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function checkWin(symbol1, symbol2, symbol3) {
    if (symbol1 === symbol2 && symbol2 === symbol3) {
        alert('You win!');
    } else {
        alert('Try again!');
    }
}

function animateReel(reel, duration) {
    reel.style.transition = `transform ${duration}ms ease-in-out`;
    reel.style.transform = 'rotateX(360deg)';
    setTimeout(() => {
        reel.style.transform = 'rotateX(0deg)';
    }, duration);
}