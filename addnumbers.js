const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
    let number;

    if (numsLeft > 0){
        reader.question("Enter a number:", function(answer) {
            number =parseInt(answer);
        
            console.log(sum += number); 
            addNumbers(sum, numsLeft -1, completionCallback);
        });
            

    } else if(numsLeft === 0){
        completionCallback(sum);
        reader.close();
    }
    

}
addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));