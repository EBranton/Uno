import * as readline from 'node:readline/promises';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

while(true)
{
    // Print the cards


    var answer = await rl.question(">")

    if (answer == "PLAY")
    {
        
    }

    console.log(answer)
}
