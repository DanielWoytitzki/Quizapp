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

let currentQuestion = 0;


function init() {
    document.getElementById('allquestionsnumber').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

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

    if(selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    
    document.getElementById('nextbutton').disabled = false;
}