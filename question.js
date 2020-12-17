function Question(questionString, correctAnswer, incorrectAnswer) {
  this.questionString = questionString;
  this.correctAnswer = correctAnswer;
  this.incorrectAnswer = incorrectAnswer;
}

Question.prototype.toHTML = function() {
  document.getElementById('question').innerHTML = this.questionString;
  
  document.getElementById('guess0').classList.remove('correct');
  document.getElementById('guess0').classList.remove('incorrect');
  document.getElementById('guess1').classList.remove('correct');
  document.getElementById('guess1').classList.remove('incorrect');
  
  if (Math.floor(Math.random() * 2) === 0) {
    document.getElementById('guess0').innerHTML = this.correctAnswer;
    document.getElementById('guess0').classList.add('correct');
    document.getElementById('guess1').innerHTML = this.incorrectAnswer;
    document.getElementById('guess1').classList.add('incorrect');
  } else {
    document.getElementById('guess1').innerHTML = this.correctAnswer;
    document.getElementById('guess1').classList.add('correct');
    document.getElementById('guess0').innerHTML = this.incorrectAnswer;
    document.getElementById('guess0').classList.add('incorrect');
  }
}