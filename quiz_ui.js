var questionTotal = showtime.questions.length;
var questionsRight = 0;

var progressMessage = document.getElementById('progress');

progressMessage.update = function() {
  progressMessage.innerHTML = 'Question ' + (showtime.currentQuestion + 1) + ' out of ' + questionTotal;
}

progressMessage.update();

var button0 = document.getElementById('guess0');
var button1 = document.getElementById('guess1');

button0.onclick = function() {
  if (button0.classList.contains('correct')) {
    questionsRight ++;
  }
  
  showtime.next();
}

button1.onclick = function() {
  if (button1.classList.contains('correct')) {
    questionsRight ++;
  }
  
  showtime.next();
}
