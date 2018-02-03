//CONSTRUCTOR FUNCTION FOR LETTER.JS
//Instructions:
//Letter.js Should control whether or not a letter appears as a "_" or as itself on-screen.
//Accessing the Game random words.
//=====================================================================================
var Letter = function(testLetter){

	this.current = "_"
	this.theLetters = testLetter;
	//letter appears
	this.showsLetter = false;
	this.letterin = function(letter){
		if(this.theLetters == letter){
			this.current = this.theLetters; 
			return true;
		}
			return false;
	}
	//Method that will tell us if the letter appears or if "_" will appear.
	this.letterShows = function(){
		return this.current;
	}
};
//var x = new Letter("x");
// console.log(x.theLetters);
 //console.log(x.letterShows());
// console.log(x.letterin("t"));
// console.log(x.letterin("x"));
// console.log(x.letterShows());

//=====================================================================================
module.exports = Letter;