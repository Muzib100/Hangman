//CONSTRUCTOR FUNCTION FOR GAME.JS
//Instruction:
//Your game.js file will randomly select a word for the player.
var Word = require("./word_file.js");


var Game = function(){
	this.chosenWords = ["suitar","guitar","drums","flute","tuba","trumpet","violin"];

	this.randomWord = this.chosenWords[ Math.floor(Math.random() * this.chosenWords.length)];
	this.currentWord = new Word(this.randomWord);
	
}
	var hangMan = new Game();
	//console.log(hangMan.randomWord);

module.exports = Game;