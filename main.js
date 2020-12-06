const quiz = [
  {
    question: '広島県の飲料メーカーが手がけるご当地サイダーの一つで、広島のあるものがラムネになりました！あるものとはなんでしょう？',
    answers: ['①かきフライ','②みかん鍋','③もみじ饅頭'],
    correct: '③もみじ饅頭'
  },{
    question: '広島県のご当地キャラクターで、ユネスコ無形文化財遺産登録「壬生の花田植」の飾り牛がモチーフのキャラクターの名前はなんでしょう？',
    answers: ['①花田舞太郎','②ミンチュー','③たかたん'],
    correct: '①花田舞太郎'
  },{
    question: '広島県民が愛する「広島カープ」のキャラクター「スラィリー」ですが、あるキャラクターの会社がデザインしました。あるキャラクターとはなんでしょう？',
    answers: ['①セサミストリート','②モンスターズインク','③ハローキティ'],
    correct: '①セサミストリート'
  }
];


const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

document.getElementById('question').textContent = question;

//クイズ問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();


const clickHandler = (e) => {
  if(quiz[quizIndex].correct == e.target.textContent ){
    window.alert('正解！');
    score++;
  }else {
    window.alert('不正解！');
  }
  quizIndex++;
  if (quizIndex < quizLength) {
    setupQuiz();
  }else{
      window.alert('終了！あなたの正解数は'+ score + '/' + quizLength + 'です');

    }
  };

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++
}



// コメント
// HTMLのオブジェクトを取得する時は,変数に[$]をつけるとわかりやすい