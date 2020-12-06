// 定数を定義
const question = 'ゲーム市場最も売れたゲームは？';
const ansers = [
    'スーファミ',
    'プレステ',
    'DS',
    'スイッチ'
  ];

const correct = 'スイッチ';


document.getElementById('question').textContent = question;

const $button = document.getElementsByTagName('button')

//定数の文字列をHTMLに反映させる
$button[0].textContent = ansers[0];
$button[1].textContent = ansers[1];
$button[2].textContent = ansers[2];
$button[3].textContent = ansers[3];

// ボタンをクリックしたら正誤判定
$button[0].addEventListener('click', () => {
  if(correct == document.getElementsByTagName('button')[0].textContent ){
    window.alert('正解！');
  }else {
    window.alert('不正解！');
  }
});
$button[1].addEventListener('click', () => {
  if(correct == document.getElementsByTagName('button')[1].textContent ){
    window.alert('正解！');
  }else {
    window.alert('不正解！');
  }
});
$button[2].addEventListener('click', () => {
  if(correct == document.getElementsByTagName('button')[2].textContent ){
    window.alert('正解！');
  }else {
    window.alert('不正解！');
  }
});
$button[3].addEventListener('click', () => {
  if(correct == document.getElementsByTagName('button')[3].textContent ){
    window.alert('正解！');
  }else {
    window.alert('不正解！');
  }
});





// コメント
// HTMLのオブジェクトを取得する時は,変数に[$]をつけるとわかりやすい