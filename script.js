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
      continueBtn = document.querySelector('.continue');

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
    setUp();
    ansResult.style.display = 'none';
    main.classList.remove('pointer-events-none');
});

nomorSoal.textContent = noSoal;

let soalIndex = -1;
let lastIndex = -1;

function setUp(){
    while(soalIndex === lastIndex){
        soalIndex = Math.floor(Math.random() * soalMath.length);
    }
    lastIndex = soalIndex;
    createSoal(soalIndex);
}

function createSoal(soalIndex){
    document.addEventListener("DOMContentLoaded", () => {
        soal.innerHTML = katex.renderToString(soalMath[soalIndex].question);
        btnA.innerHTML = katex.renderToString(soalMath[soalIndex].option[0]);
        btnB.innerHTML = katex.renderToString(soalMath[soalIndex].option[1]);
        btnC.innerHTML = katex.renderToString(soalMath[soalIndex].option[2]);
        btnD.innerHTML = katex.renderToString(soalMath[soalIndex].option[3]);
    });

    console.log(soalIndex);
}

function checkAnswer(e){
    main.classList.add('pointer-events-none');
    const index = Math.floor(Math.random() * 5);
    if(e.currentTarget.textContent === soalMath[soalIndex].answer){
        correctCount++;
        jumlahBenar.textContent = correctCount;
        feedback.textContent = correctAns[index];
        ansResult.style.display = 'initial';
        continueBtn.classList.remove('bg-red-500');
        continueBtn.classList.add('bg-blue-500');
        // setUp();
    } else {
        wrongCount++;
        jumlahSalah.textContent = wrongCount;
        feedback.textContent = wrongAns[index];
        ansResult.style.display = 'initial';
        continueBtn.classList.remove('bg-blue-500');
        continueBtn.classList.add('bg-red-500');
        // setUp();
    }
}

setUp();