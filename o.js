const readline = require('readline');

/**
 * メイン処理
 */
const main = async () => {
    for (;;) {
        console.log('エリクサーちょうだい！');
        if (await confirm('> あげますか？')) {
            console.log('ありがとう！^_^');
            break;
        } else {
            console.log('死ね！');
        }
        console.log('');  // 改行
    }
};

/**
 * ユーザーにYes/Noで答えられる質問をする
 */
const confirm = async (msg) => {
    const answer = await question(`${msg}(y/n): `);
    return answer.trim().toLowerCase() === 'y';
};

/**
 * 標準入力を取得する
 */
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

// 起動
(async () => {
    await main();
})();
/*
test
*/