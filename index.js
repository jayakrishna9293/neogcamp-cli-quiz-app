var readlineSync=require("readline-sync");
var score=0;
var username=readlineSync.question("What is your name? ");
console.log("Welcome "+username+" Do You Know JayaKrishna")
function play(question,answer){
  var useranswer=readlineSync.question(question);
  if(useranswer.toUpperCase===answer.toUpperCase){
    console.log("right!");
    score=score+1;
  }
  else{
    console.log("wrong!");
    score=score-1;
  }
  console.log("Current score:" ,score);
  console.log("------------")
}
var questions=[{
  question:"where do I live? ",
  answer:"vizag"
},
{
  question:"where do I work? ",
  answer:"google"
},{
  question:"who is my superhero? ",
  answer:"spiderman"
},{
  question:"what do I like to eat? ",
  answer:"biryani",
},{
  question:"what is my surname? ",
  answer:"veeragandham"
}
  ]
 for(var i=0;i<questions.length;i++){
   var currentq=questions[i];
   play(currentq.question,currentq.answer);
 }
console.log("Yay your final score ",score);