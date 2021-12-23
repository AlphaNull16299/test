let math = require("mathjs");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('input num ', (answer) => {
    console.log(math.sqrt(answer));
    readline.close();
});