import soalMath from "./soal.js";

let wrongAns = [
    'Not quite!',
    'Close, but not the one.',
    'Good try!',
    'Oops, not that one.',
    'Almost there.'
]

let correctAns = [
    'You got it!',
    'Nicely done.',
    'That\'s right!',
    'Spot on!',
    'Great work!'
]

const btnA = document.querySelector('.a'),
      btnB = document.querySelector('.b'),
      btnC = document.querySelector('.c'),
      btnD = document.querySelector('.d'),
      main = document.querySelector('.main'),
      soal = document.querySelector('.soal'),
      jumlahBenar = document.querySelector('.jumlah-benar'),
      jumlahSalah = document.querySelector('.jumlah-salah'),
      nomorSoal = document.querySelector('.no-soal'),
      ansResult = document.querySelector('.check-answer'),
      feedback = document.querySelector('.feedback'),
      continueBtn = document.querySelector('.continue'),
      explanation = document.querySelector('.explanation'),
      explainSection = document.querySelector('.explanation-section'),
      checkExp = document.querySelector('.check-explanation'),
      quitExplanation = document.querySelector('.fa-solid');

let noSoal = 1;
let correctCount = 0;
let wrongCount = 0;

btnA.addEventListener('click', checkAnswer);
btnB.addEventListener('click', checkAnswer);
btnC.addEventListener('click', checkAnswer);
btnD.addEventListener('click', checkAnswer);
continueBtn.addEventListener('click', () => {
    noSoal++;
    nomorSoal.textContent = noSoal;
    resetOption();
    setUp();
    main.classList.remove('pointer-events-none');
});
checkExp.addEventListener('click', () => {
    console.log('checkExp clicked');
    explainSection.classList.remove('hidden');
    explainSection.classList.add('initial');
    showExplain();
});
quitExplanation.addEventListener('click', () => {
    explainSection.classList.add('hidden');
}) 

nomorSoal.textContent = noSoal;

let soalIndex = -1;
let lastIndex = -1;

let currentQuestion = null;

function setUp(){
    ansResult.style.display = 'none';

    while(soalIndex === lastIndex){
        soalIndex = Math.floor(Math.random() * soalMath.length);
    }
    console.log('soalIndex: ', soalIndex);
    lastIndex = soalIndex;
    createSoal(soalIndex);
}

function createSoal(soalIndex){
    currentQuestion = soalMath[soalIndex];

    soal.innerHTML = katex.renderToString(soalMath[soalIndex].question);
    btnA.innerHTML = katex.renderToString(soalMath[soalIndex].option[0]);
    btnB.innerHTML = katex.renderToString(soalMath[soalIndex].option[1]);
    btnC.innerHTML = katex.renderToString(soalMath[soalIndex].option[2]);
    btnD.innerHTML = katex.renderToString(soalMath[soalIndex].option[3]);
}

function checkAnswer(e){
    main.classList.add('pointer-events-none');
    const index = Math.floor(Math.random() * 5);
    
    btnA.dataset.latex = currentQuestion.option[0];
    btnB.dataset.latex = currentQuestion.option[1];
    btnC.dataset.latex = currentQuestion.option[2];
    btnD.dataset.latex = currentQuestion.option[3];

    console.log(e.currentTarget.dataset.latex);
    if(e.currentTarget.dataset.latex === soalMath[soalIndex].answer){
        // console.log(e.currentTarget)
        e.currentTarget.classList.remove('border-blue-700');
        e.currentTarget.classList.add('bg-green-500');
        correctCount++;
        jumlahBenar.textContent = correctCount;
        feedback.textContent = correctAns[index];
        ansResult.style.display = 'initial';
        continueBtn.classList.remove('bg-red-500');
        continueBtn.classList.add('bg-blue-500');
        // setUp();
    } else {
        e.currentTarget.classList.remove('border-blue-700');
        e.currentTarget.classList.add('bg-red-500');
        wrongCount++;
        jumlahSalah.textContent = wrongCount;
        feedback.textContent = wrongAns[index];
        ansResult.style.display = 'initial';
        continueBtn.classList.remove('bg-blue-500');
        continueBtn.classList.add('bg-red-500');
        // setUp();
        [btnA, btnB, btnC, btnD].forEach(btn => {
        if(btn.dataset.latex === soalMath[soalIndex].answer){
            btn.classList.remove('border-blue-700');
            btn.classList.add('bg-green-500');
        }
    });
    }
}

function resetOption(){
    [btnA, btnB, btnC, btnD].forEach(btn => {
        btn.classList.remove('bg-green-500', 'bg-red-500');
        btn.classList.add('border-blue-700');
    });
}

function showExplain(){
    explanation.innerHTML = katex.renderToString(currentQuestion.explain);
}

setUp();