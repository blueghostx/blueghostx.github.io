document.addEventListener('DOMContentLoaded', () => {
  const message = document.getElementById('message');
  const hintRef = document.querySelector('.hint-ref');
  const letterContainer = document.getElementById('letter-container');
  const userInputSection = document.getElementById('user-input-section');
  const resultText = document.getElementById('result');
  const startButton = document.getElementById('start');
  const scoreDisplay = document.getElementById('score');
  const highScoreDisplay = document.getElementById('highScore');
  
  let selectedWord = '';
  let selectedHint = '';
  let chances = 5;
  let score = 0;
  let highScore = localStorage.getItem('highScore') || 0;

  highScoreDisplay.textContent = highScore;

  const options = {
    aroma: "Pleasing smell",
    pepper: "Salt's partner",
    halt: "Put a stop to",
    zealot: "A person who is fanatical and uncompromising in pursuit of their religious, political, or other ideals",
    // Add more words and hints here...
  };

  const startGame = () => {
    // Reset game state
    chances = 5;
    resultText.textContent = '';
    message.textContent = '';
    letterContainer.innerHTML = '';
    userInputSection.innerHTML = '';

    // Hide the start button
    startButton.style.display = 'none';

    // Choose a random word
    const optionKeys = Object.keys(options);
    const randomIndex = Math.floor(Math.random() * optionKeys.length);
    selectedWord = optionKeys[randomIndex];
    selectedHint = options[selectedWord];

    // Display hint
    hintRef.textContent = `Hint: ${selectedHint}`;

    // Display input spaces
    userInputSection.innerHTML = selectedWord.split('').map(() => '<span class="inputSpace">_</span>').join('');

    // Display letter buttons
    for (let i = 65; i < 91; i++) {
      const letter = String.fromCharCode(i);
      const button = document.createElement('button');
      button.textContent = letter;
      button.classList.add('letters');
      button.addEventListener('click', () => handleLetterClick(button));
      letterContainer.appendChild(button);
    }
  };

  const handleLetterClick = (button) => {
    const letter = button.textContent.toLowerCase();
    const inputSpaces = document.querySelectorAll('.inputSpace');
    let correctGuess = false;

    selectedWord.split('').forEach((char, index) => {
      if (char === letter) {
        inputSpaces[index].textContent = char;
        correctGuess = true;
      }
    });

    if (!correctGuess) {
      chances--;
    }

    button.disabled = true;

    if (chances === 0) {
      resultText.textContent = `Sorry 😔 you lost. The word was "${selectedWord}". Try again later.`;
      letterContainer.innerHTML = ''; // Clear letter buttons

      // Update high score if necessary
      if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore);
        highScoreDisplay.textContent = highScore;
      }

      // Reset score
      score = 0;
      scoreDisplay.textContent = score;

      setTimeout(() => {
        alert('Game Over!');
        startButton.style.display = 'block';
      }, 1000);
    }

    if (Array.from(inputSpaces).every(span => span.textContent !== '_')) {
      score++;
      scoreDisplay.textContent = score;
      resultText.textContent = 'Congratulations! You guessed it right! 🎉';
      letterContainer.innerHTML = ''; // Clear letter buttons
      setTimeout(() => {
        // Show confetti animation
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        document.body.appendChild(confetti);

        // Remove confetti element after animation completes
        confetti.addEventListener('animationend', () => {
          confetti.remove();
        });

        alert('You Won!');
        startGame(); // Start a new game automatically
      }, 1000);
    }
  };

  startButton.addEventListener('click', startGame);
});
// Select all letter buttons
const letterButtons = document.querySelectorAll('#letter-container button');

// Iterate over each letter button and add a click event listener
letterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Add the 'clicked' class to the clicked button
    button.classList.add('clicked');
    // Disable the button to prevent further clicks
    button.disabled = true;
  });
});