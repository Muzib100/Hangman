//CONSTRUCTOR FUNCTION
//Instruction:
//main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
//The app should end when a player guesses the correct word or runs out of guesses.
var prompt = require("prompt");
var Game = require('./game_file.js');
var hangmanGame = new Game();
var userGuess = 10;

	prompt.start(); //starting the prompt
	letTheGameBegin(userGuess);
//=====================================================================================
		function letTheGameBegin(guesses){
			console.log("Guesses remaining: " + guesses);
			if(hangmanGame.currentWord.comparingWords() == true){
				console.log("*********************************");
				console.log("You win");
				console.log("You correct word is: ", hangmanGame.randomWord);
				console.log("*********************************");
				return;
			}
			//if the user is out of gusses!
			if(guesses <= 0){
				console.log("*********************************");
				console.log("Game Over!, you lost");
				console.log(" The correct word is: ", hangmanGame.randomWord);
				console.log("*********************************");
				return;
			}

		// will display the "_" and the number of spaces in the game.
		console.log(hangmanGame.currentWord.display());

	prompt.get(["theGuess"], function(err, result){
		if(err){
			return err;
		}
		//compares the letter from secretword and the letter typed.
		if(hangmanGame.currentWord.foundIt(result.theGuess) == false){
			guesses --;
		}
		letTheGameBegin(guesses);

	});
}// end of the funcition and the game! :)




//var guesses = 10;
//need to use inquire.prompt***
//use a recursive call of the funciton
//call the inquire function
//ending case is important
//

