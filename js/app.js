
	/*--- declaring important variables default values---*/
var secretNumber=0;
var guessNumber=0;
var guessCount=0;
var currentDistance=0;
var oldDistance=0;

$(document).ready(function(){

	newGame();// Start with a new game once page loads

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
  		$("#userGuess").val("");
  		$('#count').text(guessCount);
  		$('#feedback').text('Make your Guess!');
  		$("#guessList li").remove();
  		secretNumber=Math.floor((Math.random() * 100) + 1);
  		console.log("The secret number is: "+secretNumber);
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
	    		alert("Please enter an integer");
			}
		else if (num<0 || num>100) 
			{
	    		alert("Please enter a number between 1 and 100");
			}
		else
			{
				guessCount++;
				console.log("Guess count is " +guessCount);
				$('#count').text(guessCount);
				currentDistance=Math.abs(num-secretNumber);
				console.log("DEBUG:"+"<li> Try # :"+guessCount+" guess:"+num+" </li>");
				$("#guessList").append("<li> "+num+checkDistance(currentDistance)+" </li>"); // append your element to the #console element
				$('#feedback').text(compareDistance(currentDistance));
			}	
	}

/*------------This function will evaluate distance, and print the message based on proximity-------------*/
	function checkDistance (distance)
	{
		if (distance==0) 
		{
			return(": BINGO!!!!")
		}
		else if (distance<=10) 
		{
			return(": VERY HOT")
		}
		else if (distance<=20) 
		{
			return(": HOT")
		}
		else if (distance<=30) 
		{
			return(": WARM")
		}
		else if (distance<=50) 
		{
			return(": COLD")
		}
		else
		{
			return(": ICE COLD")
		}
	}

	/*------------This function will compare current distance with old distance, and advice on how better off the guess is-------------*/
	function compareDistance (distance)
	{
		console.log("DEBUG: Comparing old "+oldDistance+" with new "+distance);

		if (guessCount<=1) //If its the first guess, no comparrison comment will be made.
		{
			oldDistance=distance;
			return(" FIRST SHOT ");
		}
		else if (oldDistance==distance)
		{
			oldDistance=distance;
			return(" SAME ");
		}
		else if (oldDistance>distance)
		{
			oldDistance=distance;
			return(" HOTTER ");	

		}
		else 
		{
			oldDistance=distance;
			return(" COLDER ");	
		}
	}

});


