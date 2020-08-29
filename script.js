/*Scissors, Paper -> The Scissors choice wins, as Scissors can cut Paper.
Rock, Scissors ->The Rock choice wins, as Rock can blunt Scissors.
Paper, Rock ->The Paper choice wins, as Paper can cover Rock.*/
let computerChoice=['rock','paper','scissors'];
let myChoice=prompt('enter your choice');
// let status;
// if(myChoice==computerChoice[Math.floor(Math.random()*computerChoice.length)]){
//   status=true;
// }else{
//   status=false;
// }
// console.log(status);
function gamePlay(computerChoice,myChoice){
  //we have not assigned this variable
  let status;
if(myChoice=='scissors'&&computerChoice[Math.floor(Math.random()*computerChoice.length)]=='paper'){
  status='you won';
  //we use Math.floor to round the random number then we used Math.random() to choose randomly elements from array then i multiplied Math.random() to computerChoice.length;
}else if(myChoice=='rock'&&computerChoice[Math.floor(Math.random()*computerChoice.length)]=='paper'){
  status='you won';
}else if(myChoice=='rock'&&computerChoice[Math.floor(Math.random()*computerChoice.length)]=='scissors'){
  status='you won';
}else if(myChoice=='paper'&&computerChoice[Math.floor(Math.random()*computerChoice.length)]=='rock'){
  status='you won';
}else if(myChoice=='rock'&&computerChoice[Math.floor(Math.random()*computerChoice.length)]=='scissors'){
  status='you won';
}else if(myChoice=='scissors'&&computerChoice[Math.floor(Math.random()*computerChoice.length)]=='rock'){
  status='you won';
}else if(myChoice=='paper'&&computerChoice[Math.floor(Math.random()*computerChoice.length)]=='scissors'){
  status='you won';
}else{
  status='you failed';
}
console.log(status);
}
gamePlay(computerChoice,myChoice);