var readlineSync = require("readline-sync");
var score = 0;
var highscores = [
  {
    name: "yash",
    score: 10,
  },
  {
    name: "soul",
    score: 9,
  }
  
]

var userName = readlineSync.question("what's your good name? ");
console.log ("welcome " + userName + " how well do you know me ? " );

function play (question,answer){
 var userAnswer = readlineSync.question(question);

if (userAnswer === answer){
  console.log ("you are right");
  score = score + 1 ;
}
else {
  console.log ("you are wrong");
}
  console.log ("score is " + score);
  console.log ("-------");
}

var questions = [{ 
  question  :  " where do i live ? " ,
                     answer  :  "hyderabad" } ,
                 { question  :  " which dish do i like ?  " ,
                     answer  :  "biryani" } ,
                 { question  :  " what type of books i prefer to read ?  " ,                   
                    answer  :  "nonfiction" } ,
                 { question  :  " what's my favourite cartoon ?  " ,
                     answer  :  "doremon" } ,
                 { question  :  " where do i prefer to work? " ,
                     answer  :  "startups" } ,
                 { question  :  " which was my favourite film ?  " ,
                     answer  :  "sahoo" } ,
                 { question  :  " what do i do when i was bored ?  " ,
                     answer  :  "explore" } 
                 
                   ];

for (var i=0; i<questions.length; i++) {
var currentquestion = questions[i];
  play (currentquestion.question,
       currentquestion.answer)
}

console.log ("congratulations your score is " + score );

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}




       
         
           
            