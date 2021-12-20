const readline = require('readline');
const main = async () => {
    for (;;) {
        const answer = await prompt('エリクサーちょうだい！');
        if (['あげる', 'はい', 'どうぞ'].includes(answer)) {
            console.log('ありがとう！^_^');
            break;
        }
        else if (['あげない', 'だめ', 'ダメ', '駄目'].includes(answer)) {
            console.log('死ね！');
        }
        console.log('');  // 改行
    }
};
const prompt = async (msg) => {
    console.log(msg);
    const answer = await question('> ');
    return answer.trim();
}
const question = (question) => {
    const readlineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        readlineInterface.question(question, (answer) => {
            resolve(answer);
            readlineInterface.close();
        });
    });
};
(async () => {
    await main();
})();