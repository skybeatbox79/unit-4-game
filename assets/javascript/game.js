// Variables
var wins = 0;
var losses = 0;
var userTotal = 0;

// Math Function
randomNumber = Math.floor((Math.random() * (120 - 19 + 1)) + 19);
gem1 = Math.floor((Math.random() * 12) + 1);
gem2 = Math.floor((Math.random() * 12) + 1);
gem3 = Math.floor((Math.random() * 12) + 1);
gem4 = Math.floor((Math.random() * 12) + 1);

// Start
var startGame = function(){
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	$('.total-score').empty();
	$('.total-score').append(userTotal);
}

// Reset
var reset = function(){
	userTotal = 0;
    randomNumber = Math.floor((Math.random() * (120 - 19 + 1)) + 19);

	$('.value').empty();
	$('.value').append(randomNumber);

	gem1 = Math.floor((Math.random()* 12) + 1);
    gem2 = Math.floor((Math.random()* 12) + 1);
    gem3 = Math.floor((Math.random()* 12) + 1);
    gem4 = Math.floor((Math.random()* 12) + 1);
    startGame();
}

// Config
var config = function (){
	if (userTotal === randomNumber) {
        wins++;
        alert("You Won!")
		reset();
}
	else if(userTotal > randomNumber){
        losses++;
        alert("You Lost!")
		reset();
}
	else{
		startGame();
}}

	$('.userTotal').append(userTotal);
	$('.value').append(randomNumber);

	$(document).ready(function(){
    
    $('#gem1').click(function(){
		userTotal += gem1;
		config();
    });
    
	$('#gem2').click(function(){
		userTotal += gem2;
		config();
    });
    
	$('#gem3').click(function(){
		userTotal += gem3;
		config();
    });
    
	$('#gem4').click(function(){
		userTotal += gem4;
		config();
	});
});



