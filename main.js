function shuffledNumbersTable() {
    // フォームから人数（数値）を抽出する
    const number = document.getElementById("number").value;

    // 入力数値が1以下の場合はエラーを表示する
    if (number <= 1) {
        alert("2以上の数値を入力して下さい。");
        return;
    }

    // 数字を入れる配列を定義しておく
    const numbersTable = [];

    // 配列を生成する
    for (let i = 0; i < number; i++) {
        numbersTable.push(i + 1);
    }


    // 配列をシャッフルする関数
    const shuffleArray = array => {
        const copyArray = array.slice();
        for (let i = copyArray.length - 1; i > 0; i--) {
            const r = Math.floor(Math.random() * (i + 1));
            [copyArray[i], copyArray[r]] = [copyArray[r], copyArray[i]];
        }
        return copyArray;
    };

    // 配列をシャッフルし出力する
    const shuffledNumbersTable = shuffleArray(numbersTable);
    document.getElementById('result').textContent = shuffledNumbersTable.join(',');


    // 画面を切り替える
    $('#result_display').show();
    $('#clearBtn').show();
    $('#top').hide();
}