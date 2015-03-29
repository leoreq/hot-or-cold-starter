
	/*--- declaring important variables default values---*/
var secretNumber=0;
var guessNumber=0;
var guessCount=0;
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	/*--- On click run newGame function ---*/
  	$(".new").click(function(){
    	newGame();
  	});
  	/*--- create a random number that will be stored for each new game ---*/
  	function newGame() 
  	{
  		guessCount=0;
  		$('#count').text(guessCount);
  		$("#guessList li").remove();
  		var secretNumber=Math.floor((Math.random() * 10) + 1);
  		console.log(secretNumber);
  	}
  	
	/*--- Store the guess if he presses the enter button after typing  ---*/


	$("#userGuess").on('keypress', function (event) {
		if (event.which==13) {
			event.preventDefault();
				var guessNumber = $(this).val();
				console.log( "the guess via enter statement , and the value entered  is "+guessNumber)  ;
				$(this).val("");
				checkGuess(guessNumber);
			} 
	})

	/*--- Store the guess if the guess button is pressed  ---*/

	$("#guessButton").on('click', function (event) {

		var guessNumber = $("#userGuess").val();
		console.log( "the guess entered via guess button , and the value entered is "+guessNumber)  ;
		$("#userGuess").val("");
		checkGuess(guessNumber);
	})
	
	/* -- Function that checks if input is a valid number, and allows count --*/
	
	function checkGuess(num)
	{
		if (num==NaN || num%1!=0) 
			{
	    		alert("please enter an integer");
			}
		else
			{
				guessCount++;
				console.log("Guess count is " +guessCount);
				$('#count').text(guessCount);
				console.log("DEBUG:"+"<li> Try # :"+guessCount+" guess:"+num+" </li>");
				$("#guessList").append("<li> "+num+" </li>"); // append your element to the #console element
			}	
	}

});


