function Quiz() {
  this.questions = [];
  this.currentQuestion = 0;
}

Quiz.prototype.add = function(question) {
  this.questions.push(question);
}

Quiz.prototype.next = function() {
  this.currentQuestion++;
  progressMessage.update();
  
  if (this.currentQuestion === this.questions.length) {
    this.quizFinished();  
  } else {
    this.renderInElement();
  }
}

Quiz.prototype.quizFinished = function() {
  alert('Congratulations! You got ' + questionsRight + ' right out of ' + questionTotal + '! Try again?');
  
  
  this.currentQuestion = 0;
  questionsRight = 0;
  progressMessage.update();
  this.renderInElement();
}

Quiz.prototype.renderInElement = function () {
  this.questions[this.currentQuestion].toHTML();
}