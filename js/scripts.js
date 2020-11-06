var wordsCurrent =  function () {
	var input = document.getElementById("words-current").value;
	return parseInt(input);
}
var wordsToday = function() {
	var input = document.getElementById("words-today").value;
	return parseInt(input);
}
var wordsEndGoal = function() {
	var input = document.getElementById("words-end-goal").value;
	return parseInt(input);
}

function calculateWords() {
	if (wordsCurrent() <= wordsEndGoal()) {
		document.getElementById("answerText").innerHTML = "If you write " + wordsToday() + " words per day, you will need to write for another " + Math.floor((wordsEndGoal() - wordsCurrent()) / wordsToday()) + " days!";
	}
}