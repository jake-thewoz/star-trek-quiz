var showtime = new Quiz();

var ques1 = new Question('Which is the best Star Trek movie?', 'Wrath of Khan', 'Insurrection');
var ques2 = new Question('Who played James T. Kirk?', 'William Shatner', 'Sir Patrick Stewart');
var ques3 = new Question('Who played Khan?', 'Ricardo Montalban', 'Walter Koenig');
var ques4 = new Question('If going "by the book," how long is two hours?', 'Two days', 'Two hours');
var ques5 = new Question('How did Merritt Butrick, the actor who played David Marcus (Kirk\'s son), die?', 'AIDS', 'Car crash');
var ques6 = new Question('Complete this quote: "...from Hell\'s heart, I stab at thee! For hate\'s sake, I...', 'spit my last breath at thee!"', 'scratch at thine ugly face!"');
var ques7 = new Question('Which other Star Trek movie heavily quotes \'Moby Dick\'?', 'First Contact', 'Generations');
var ques8 = new Question('Which character delivers the final monologue in Wrath of Khan?', 'Spock', 'Kirk');

showtime.add(ques1);
showtime.add(ques2);
showtime.add(ques3);
showtime.add(ques4);
showtime.add(ques5);
showtime.add(ques6);
showtime.add(ques7);
showtime.add(ques8);

showtime.renderInElement();
