function shuffleNumber() {
  //フォームから特認と一般の人数を抽出する
  var firstNum = document.getElementById("first").value;
  var secondNum = document.getElementById("second").value;

  //入力された人数を数値に変換
  var tok = parseFloat(firstNum);
  var ipp = parseFloat(secondNum);
  var num = parseFloat(firstNum);

  //抽選用の配列を定義しておく
  var firstTable = [];
  var secondTable = [];

  while (ipp >= 1) {
    secondTable.push(ipp + tok);
    ipp--;
  }

  while (tok >= 1) {
    firstTable.push(tok);
    tok--;
  }

  const values = firstTable;

  const shuffleByES6 = array => {
    // deep copy
    const ary = array.slice();
    for (let i = ary.length - 1; 0 < i; i--) {
      let r = Math.floor(Math.random() * (i + 1));
      // ary[i] <-> ary[r]
      [ary[i], ary[r]] = [ary[r], ary[i]];
    }
    return ary;
  }
  const shuffledByES6 = shuffleByES6(values);

  document.getElementById('es6').append(shuffledByES6.join(','));


  const value = secondTable;

  const shuffleByES7 = array => {
    // deep copy
    const ary = array.slice();
    for (let i = ary.length - 1; 0 < i; i--) {
      let r = Math.floor(Math.random() * (i + 1));
      // ary[i] <-> ary[r]
      [ary[i], ary[r]] = [ary[r], ary[i]];
    }
    return ary;
  }
  const shuffledByES7 = shuffleByES7(value);

  document.getElementById('es7').append(shuffledByES7.join(','));


  $('#result').show();
  $('#clearBtn').show();

  $('#top').hide();

}