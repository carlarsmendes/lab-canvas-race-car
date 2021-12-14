class Game {
  constructor() {
    this.car = {};
    this.obstacles = [];
    this.score = 0;
    this.obstaclesFrequency = 0;
    this.animationId = null;
    this.gameOver = false;
    }

    startGame() {
      this.score = 0;
      document.getElementById("score").innerHTML = 0;
    }

    restartGame() {
      this.obstaclesFrequency = 0;
      
      this.obstacles = [];
     
      document.getElementById("game-board").style.display = "none";
      cancelAnimationFrame(this.animationId);
    }

    setHighScores(){
      let playerName = prompt("Nooooo! You Lost! Save your name for posterity!!");
      let playersArr = JSON.parse(localStorage.getItem('playersScore')) || [];
      let playerObj = {};
      playerObj[playerName] = this.score;
      playersArr.push(playerObj);
      localStorage.setItem('playersScore', JSON.stringify(playersArr));

      // Retrieve the object from storage
      let retrievedArr = JSON.parse(localStorage.getItem('playersScore'));
      console.log('retrievedArrayofObjects: ', retrievedArr);
    }

    getHighScores(){
      
    }
  
}
