const quiz = [
	   
	   {
		   question: "Who is Arsenal's top scorer?",
		   a: "lacazette",
		   b: "aubameyang",
		   c: "henry",
		   d: "wright",
		   correct: "c",
		   
	   },
	   
	   {
		   question: "Who is Arsenal's top assist man?",
		   a: "ozil",
		   b: "henry",
		   c: "berkamp",
		   d: "cole",
		   correct: "c",
		   
	   },
];

const quiz_d = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

	
loadQuiz()

function loadQuiz() {
	
	clear();
	
	const currentQuizData = quiz[currentQuiz]
	
	questionEl.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
	
}

function clear() {
	answerEls.forEach(answerEls => answerEls.checked = false);
}





