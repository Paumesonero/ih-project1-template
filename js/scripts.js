window.onload = function () {
  //document.getElementById(backgroundSong)
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const startPage = document.getElementById('start-page');
  const startButton = document.getElementById('start');
  const tryAgainBtn = document.getElementById('startAgain');
  const losePage = document.getElementById('lose-page');

  startButton.onclick = function () {
    startPage.style = "display: none";
    canvas.classList.remove('hidden');
    const game = new Game(ctx);
    game.start();
  }

  tryAgainBtn.onclick = function () {
    losePage.style = 'display: none';
    canvas.classList.add('shown');
    const newGame = new Game(ctx);
    newGame.start();
  }
}