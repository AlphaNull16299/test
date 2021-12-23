let readlineSync = require("readline-sync");
let math = require("mathjs");

let variables = {};
let flagFinish = false;

do{
    process.stdout.write("\u001b[36m数式を入力\u001b[0m\n    = ");
    let input = readlineSync.question();

    if(input.startsWith(">$")){
        let variableName = input.slice(1)
        variables[variableName] = variables.$ans;
        process.stdout.write(` \x1b[4m${variableName} に $ans (${variables.$ans}) が保存されました。\u001b[0m\n`);
    }else if(input.startsWith(">exit")){
        flagFinish = true;
    }else{
        let ans = math.eval(input, variables);

        if(ans){
            process.stdout.write(` ans: \x1b[4m\x1b[35m${ans}\u001b[0m\n`);
            variables.$ans = ans;
        }
    }

    process.stdout.write("\n");

}while(!flagFinish);