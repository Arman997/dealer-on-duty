const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('choose what you will play: ', (answer) => {
  console.log(`You entered: ${answer}`);
  stoneScissorPaper(answer.toLowerCase()); 
  rl.close();
});

rl.on('close', () => {
  console.log('The program is completed.');
});

function stoneScissorPaper(str) {
  let arr = ['stone', 'scissor', 'paper'];
  let randomComputer = Math.floor(Math.random() * arr.length);
  switch (str) {
    case arr[randomComputer]:
      console.log('draw');
      break;
    case 'stone':
      if (arr[randomComputer] === 'scissor') {
        console.log(`You won, the computer chose ${arr[randomComputer]}`);
      } else {
        console.log(`You lost, the computer chose ${arr[randomComputer]}`);
      }
      break;
    case 'scissor':
      if (arr[randomComputer] === 'paper') {
        console.log(`You won, the computer chose ${arr[randomComputer]}`);
      } else {
        console.log(`You lost, the computer chose ${arr[randomComputer]}`);
      }
      break;
    case 'paper':
      if (arr[randomComputer] === 'stone') {
        console.log(`You won, the computer chose ${arr[randomComputer]}`);
      } else {
        console.log(`You lost, the computer chose ${arr[randomComputer]}`);
      }
      break;
    default:
      console.log('there is no such command!!');
  }
}
