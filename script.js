let questions = [
    {
        "question": "Wie lautet der volle Name von Walt Disney?",
        "answer_1": "Walter Ethan Disney",
        "answer_2": "Walter Edward Disney",
        "answer_3": "Walter Elias Disney",
        "answer_4": "Walter Elmer Disney",
        "right_answer": 3
    },
    {
        "question": "Wie hieß der Drache in dem Film Elliot, das Schmunzelmonster?",
        "answer_1": "Puff",
        "answer_2": "Figment",
        "answer_3": "Mushu",
        "answer_4": "Elliot",
        "right_answer": 4
    },
    {
        "question": "Welche Disney-Prinzessin singt das Lied Almost There?",
        "answer_1": "Rapunzel",
        "answer_2": "Tiana",
        "answer_3": "Merida",
        "answer_4": "Mulan",
        "right_answer": 2
    },
    {
        "question": "Was war der erste abendfüllende Animationsfilm, der jemals veröffentlicht wurde?",
        "answer_1": "Pinocchio",
        "answer_2": "Fantasia",
        "answer_3": "Dumbo",
        "answer_4": "Schneewittchen und die sieben Zwerge",
        "right_answer": 4
    },
    {
        "question": "Wie viele Welpen hatten Pongo und Perdita in 101 Dalmatiner?",
        "answer_1": "15",
        "answer_2": "17",
        "answer_3": "21",
        "answer_4": "99",
        "right_answer": 1
    },
    {
        "question": "Welcher Disney-Film war der erste, der eine Oscar-Nominierung für den besten Film erhielt?",
        "answer_1": "Die Schöne und das Biest",
        "answer_2": "Der König der Löwen",
        "answer_3": "Aladdin",
        "answer_4": "Bambi",
        "right_answer": 1
    },
    {
        "question": "In welchem Disney-Film gibt es einen Charakter namens Lucifer?",
        "answer_1": "Aladdin",
        "answer_2": "Cinderella",
        "answer_3": "Die Hexe und der Zauberer",
        "answer_4": "Schneewittchen und die sieben Zwerge",
        "right_answer": 2
    }
];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/right-sound.mp3');
let AUDIO_FAIL = new Audio('audio/false-sound.mp3');


function init() {
    document.getElementById('allquestionsnumber').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    if (gameIsOver()) {
        showEndScreen();
    } else {
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver() {
    return currentQuestion >= questions.length;
}

function showEndScreen() {
    document.getElementById('endscreen').style = '';
    document.getElementById('allquestionsendscore').innerHTML = questions.length;
    document.getElementById('rightquestionsendscore').innerHTML = rightQuestions;
    document.getElementById('questionbody').style = 'display: none';
}

function updateProgressBar() {
    let percent = currentQuestion / questions.length;
    percent = Math.round(percent * 100);

    document.getElementById('progressbar').innerHTML = `${percent} %`;
    document.getElementById('progressbar').style = `width: ${percent}%;`;
}

function updateToNextQuestion() {

    let question = questions[currentQuestion];

    document.getElementById('currentquestionnumber').innerHTML = currentQuestion + 1
    document.getElementById('nextbutton').disabled = true;
    

    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function clickAnswer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    document.getElementById('nextbutton').disabled = true;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
    }

    document.getElementById('nextbutton').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    resetAnswers();
    showQuestion();
}

function resetAnswers() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    rightQuestions = 0;
    currentQuestion = 0;

    document.getElementById('endscreen').style = 'display: none;';
    document.getElementById('questionbody').style = '';
    init();
}