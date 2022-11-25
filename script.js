const htmlBody = document.querySelector('body');
const again = document.querySelector('.again');

/**variables difined */
let generateRandomNumber = parseInt(Math.random() * 20) + 1;
let scoreNumber = 20;
let highScoreNumber = 0;

/**score update method */
const scoreUpdates = score => {
  return (document.querySelector('.score').textContent = `💯 Score: ${score}`);
};

/**highscore update method */
const higherScore = (highScore = 0) => {
  document.querySelector(
    '.highscore'
  ).textContent = `🥇 Highscore: ${highScore}`;
};

const randomNumberBoxUpdates = message => {
  document.querySelector('.guess--number--box').textContent = message;
};

const startGuessingMethod = message => {
  document.querySelector('.start--guessing').textContent = message;
};
const checkButton = document.querySelector('.check');

again.addEventListener('click', () => {
  document.querySelector('.input--box').value = null;
  htmlBody.style.backgroundColor = '#222';

  /**updates scores */
  generateRandomNumber = parseInt(Math.random() * 20) + 1;
  scoreNumber = 20;
  scoreUpdates(scoreNumber);

  /** message update */
  startGuessingMethod(`Start guessing...`);
  randomNumberBoxUpdates('?');
});

checkButton.addEventListener('click', () => {
  const inputBoxNumber = document.querySelector('.input--box');

  if (parseInt(inputBoxNumber.value) == generateRandomNumber) {
    htmlBody.style.backgroundColor = '#55a630';
    randomNumberBoxUpdates(generateRandomNumber);
    startGuessingMethod(`🎉 Currect Number 🎊`);
    highScoreNumber = scoreNumber;
    scoreUpdates(scoreNumber);
    higherScore(scoreNumber < highScoreNumber ? highScoreNumber : scoreNumber);
  } else if (parseInt(inputBoxNumber.value) > generateRandomNumber) {
    startGuessingMethod(`📈 To high`);
    scoreUpdates(--scoreNumber);
  } else if (parseInt(inputBoxNumber.value) < generateRandomNumber) {
    scoreUpdates(--scoreNumber);
    startGuessingMethod(`📉 To low`);
  }
});
