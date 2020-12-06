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

document.getElementsByTagName('button')[0].textContent = ansers[0];
document.getElementsByTagName('button')[1].textContent = ansers[1];
document.getElementsByTagName('button')[2].textContent = ansers[2];
document.getElementsByTagName('button')[3].textContent = ansers[3];