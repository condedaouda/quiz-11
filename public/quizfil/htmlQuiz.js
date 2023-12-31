const htmlQuestions = [
  {
    question: "Qu'est-ce que HTML?",
    options: ["Un langage de balisage pour créer des pages web", "Un langage de programmation pour les bases de données", "Un navigateur web", "Un langage de style"],
    answer: 0
  },
  {
    question: "Quelle balise est utilisée pour créer un paragraphe en HTML?",
    options: ["<paragraph>", "<p>", "<para>", "<pg>"],
    answer: 1
  },
  {
    question: "Quelle balise est utilisée pour créer une liste numérotée en HTML?",
    options: ["<ul>", "<li>", "<ol>", "<dl>"],
    answer: 2
  },
  {
    question: "Quelle balise est utilisée pour créer un lien hypertexte vers un autre site web en HTML?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: 1
  },
  {
    question: "Quelle balise est utilisée pour insérer une image dans une page HTML?",
    options: ["<img>", "<picture>", "<image>", "<src>"],
    answer: 0
  },
  {
    question: "Quelle balise est utilisée pour créer une zone de texte dans un formulaire HTML?",
    options: ["<input>", "<text>", "<textbox>", "<textarea>"],
    answer: 3
  },
  {
    question: "Quelle balise est utilisée pour définir l'en-tête d'une section ou d'un article en HTML5?",
    options: ["<header>", "<h1>", "<heading>", "<section>"],
    answer: 0
  },
  {
    question: "Quelle balise est utilisée pour définir une structure de données tabulaire en HTML?",
    options: ["<table>", "<grid>", "<data>", "<tabular>"],
    answer: 0
  },
  {
    question: "Quelle balise est utilisée pour marquer un texte important ou mis en évidence en HTML?",
    options: ["<strong>", "<em>", "<bold>", "<highlight>"],
    answer: 0
  },
  {
    question: "Quelle balise est utilisée pour créer une liste déroulante dans un formulaire HTML?",
    options: ["<list>", "<select>", "<dropdown>", "<menu>"],
    answer: 1
  },
  // Ajoutez d'autres questions sur HTML
];

var interval;


function mySnack(vraisOufaux) {
  // prendre snackbar DIV
  var x = document.getElementById("snackbar");

  // ajouter "show" class à DIV
  x.className = "show";

  if (vraisOufaux == true) {
    x.innerHTML = 'Bonne réponse';
    x.style.color = 'green';
  } else {
    x.innerHTML = 'Mauvaise reponse';
    x.style.color = 'red';
  }

  // apres 3 seconds, enlever show class de DIV
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

function countdown() {

  let seconds = 30;
  const countdownElement = document.getElementById('countdown');

  // Affichage initial
  countdownElement.textContent = seconds;

  // Décrémente le compteur chaque seconde
   interval = setInterval(() => {
    seconds--;

    // Affichage du décompte
    countdownElement.textContent = seconds;

    // Vérification si le compte à rebours est terminé
    if (seconds === 0) {
      currentQuestion++;
      clearInterval(interval); // Arrête le compte à rebours
      loadQuestion(); 
      // countdownElement.textContent = "Fin de jeu";
      // currentQuestion = quizData.length;
      // var getb = document.getElementById('submit')
      // getb.style.display = 'block';
      // var getscore = document.getElementById('score')
      // getscore.style.display = 'block';
      // Ici tu peux ajouter d'autres actions à effectuer à la fin du compte à rebours
    }
  }, 1000); // Exécute toutes les 1000 millisecondes (1 seconde)
}

// Combine les questions dans l'ordre souhaité
const quizData = [...htmlQuestions];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

shuffleArray(quizData);

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const scoreElement = document.getElementById("score-value");

let currentQuestion = 0;
let score = 0;
 
function loadQuestion() {
  clearInterval(interval);
  if (currentQuestion < quizData.length) {
    countdown();
  }else{
    var getcon = document.getElementById('countdown')
    getcon.style.display = 'none';

  }
  
  
  const currentQuizData = quizData[currentQuestion];
  questionElement.innerText = currentQuizData.question;
  optionsElement.innerHTML = "";

  scoreElement.innerText = score + '/' + score;

  currentQuizData.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.innerText = option;
    li.onclick = () => checkAnswer(index);
    optionsElement.appendChild(li);
  });
}

function checkAnswer(selectedOption) {
  const currentQuizData = quizData[currentQuestion];
  if (selectedOption === currentQuizData.answer) {
    score++;
    scoreElement.innerText = score + '/' + score;
    mySnack(true);
  } else {
    mySnack(false);
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    
    loadQuestion();
    
  } else {
    var getb = document.getElementById('submit')
    getb.style.display = 'block';
    var getscore = document.getElementById('score')
    getscore.style.display = 'block';
    var getcon = document.getElementById('countdown')
    getcon.style.display = 'none';

    var finn = document.getElementById('fin')
    finn.style.display = 'block';

    var ges = document.getElementById('question')
    ges.style.display = 'none';

    var res = document.getElementById('options')
    res.style.display = 'none';

    scoreElement.innerText = score + '/' + quizData.length;
    //alert(`Fin du quiz. Votre score est de ${score} sur ${quizData.length}.`);
    // Ici, vous pouvez réinitialiser le jeu ou afficher un message de fin de jeu.  
  }
}

submitButton.addEventListener("click", () => {

  window.location.reload(); // Recharge la page lorsque vous cliquez sur "Recommencer"
  var getb = document.getElementById('submit')
  getb.style.display = 'none';
  // if (currentQuestion < quizData.length) {
  //     loadQuestion();
  // } else {
  //     alert("Le quiz est terminé !");
  //     // Ici, vous pouvez réinitialiser le jeu ou afficher un message de fin de jeu.
  // }
});

loadQuestion(); // Charge la première question au chargement de la page

