var oTemplate = '<img src="images/O.png">';
var xTemplate = '<img src="images/X.png">';
var turnState = 1;
var square1 = 0;
var square2 = 0;
var square3 = 0;
var square4 = 0;
var square5 = 0;
var square6 = 0;
var square7 = 0;
var square8 = 0;
var square9 = 0;


function increaseTurnState(){
	turnState += 1;
}

function reload(){
	$('button').click(function(event){
		location.reload();
	})
}

function renderOVictory(){
	$('body').html('<h1> O WINS! </h1><button>Play Again!</button>'); 
}

function renderXVictory(){
	$('body').html('<h1> X WINS! </h1><button>Play Again!</button>'); 
}

function renderDraw(){
	$('body').html('<h1> GAME WAS A DRAW! </h1> <button>Play Again!</button>'); 	
}


function playerStep(squareSelector){
	if(turnState % 2 === 0){
		$(squareSelector).html(xTemplate);
		$(squareSelector).attr('data-picked','5');
	}
	else{
		$(squareSelector).html(oTemplate)
		$(squareSelector).attr('data-picked','1');
	}
	turnState += 1;
}


function checkBoard(squareSelector){
	if (square1 + square2 + square3 === 3 || square4 + square5 + square6 === 3 || square7 + square8 + square9 === 3 ||
		square1 + square4 + square7 === 3 || square2 + square5 + square8 === 3 || square3 + square6 + square9 === 3 ||
		square1 + square5 + square9 === 3 || square3 + square5 + square7 === 3 ) {
		renderOVictory();
		reload();
	}
	else if(square1 + square2 + square3 === 15 || square4 + square5 + square6 === 15 || square7 + square8 + square9 === 15 ||
			square1 + square4 + square7 === 15 || square2 + square5 + square8 === 15 || square3 + square6 + square9 === 15 ||
			square1 + square5 + square9 === 15 || square3 + square5 + square7 === 15 ) {
		renderXVictory();
		reload();
	}
	else if(square1 !== 0 && square2 !== 0 && square3 !== 0 &&
			square4 !== 0 && square5 !== 0 && square6 !== 0 &&
			square7 !== 0 && square8 !== 0 && square9 !== 0) {
		renderDraw();
		reload();
	}
}




function gameStart(){
	$(document).ready(function(){
		$('#square1').click(function(){
			playerStep('#square1');
			square1 = parseInt($('#square1').attr('data-picked'));
			checkBoard();
		})	
		$('#square2').click(function(){
			playerStep('#square2');
			square2 = parseInt($('#square2').attr('data-picked'));
			checkBoard();
		})
		$('#square3').click(function(){
			playerStep('#square3');
			square3 = parseInt($('#square3').attr('data-picked'));
			checkBoard();
		})
		$('#square4').click(function(){
			playerStep('#square4');
			square4 = parseInt($('#square4').attr('data-picked'));
			checkBoard();
		})
		$('#square5').click(function(){
			playerStep('#square5');
			square5 = parseInt($('#square5').attr('data-picked'));
			checkBoard();
		})
		$('#square6').click(function(){
			playerStep('#square6');
			square6 = parseInt($('#square6').attr('data-picked'));
			checkBoard();
		})
		$('#square7').click(function(){
			playerStep('#square7');
			square7 = parseInt($('#square7').attr('data-picked'));
			checkBoard();
		})
		$('#square8').click(function(){
			playerStep('#square8');
			square8 = parseInt($('#square8').attr('data-picked'));
			checkBoard();
		})
		$('#square9').click(function(){
			playerStep('#square9');
			square9 = parseInt($('#square9').attr('data-picked'));
			checkBoard();
		})
	})
}

gameStart();