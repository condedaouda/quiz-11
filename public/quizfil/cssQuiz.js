

const cssQuestions = [
    {
        question: "Qu'est-ce que CSS?",
        options: ["Un langage de style pour les sites web", "Un langage de programmation pour les bases de données", "Un navigateur web", "Un langage de balisage"],
        answer: 0
      },
      {
        question: "Quelle propriété est utilisée pour changer la couleur du texte en CSS?",
        options: ["text-color", "color", "font-color", "foreground-color"],
        answer: 1
      },
      {
        question: "Quelle propriété est utilisée pour définir la taille de la police dans CSS?",
        options: ["text-size", "font-style", "size-font", "font-size"],
        answer: 3
      },
      {
        question: "Quelle propriété CSS est utilisée pour définir l'arrière-plan d'un élément?",
        options: ["background-color", "color-background", "element-background", "background-style"],
        answer: 3
      },
      {
        question: "Quelle propriété CSS est utilisée pour définir l'arrière-plan d'un élément?",
        options: ["color-background", "element-background", "background-color",  "background-style"],
        answer: 2
      },
      {
        question: "Quelle propriété CSS est utilisée pour ajouter de l'espace entre les lettres d'un texte?",
        options: [ "word-spacing", "letter-spacing", "text-spacing",  "font-spacing"],
        answer: 1
      },
      {
        question: "Quelle propriété CSS est utilisée pour aligner le texte à droite à l'intérieur d'un élément?",
        options: [  "align: right;", "align-text: right;", "text-align: right;",  "text-align: justify;"],
        answer: 2
      },
      {
        question: "Quelle propriété CSS est utilisée pour définir la taille de la marge extérieure d'un élément?",
        options: [  "margin-outside", "external-margin", "outer-margin",  "margin"],
        answer: 3
      },
      {
        question: "Quelle propriété CSS est utilisée pour rendre le texte en italique?",
        options: [  "font-style: italic;", "text-decoration: italic;", "style: italic;",  "italic-style: true;"],
        answer: 0
      },
      {
        question: "Quelle est la propriété CSS utilisée pour définir la taille de la police en pourcentage de la taille de la police de son élément parent?",
        options: [   "text-size", "percentage-size", "font-size",  "relative-size"],
        answer: 2
      },
      // Ajoutez d'autres questions sur CSS
];



function mySnack(vraisOufaux) {
  // prendre snackbar DIV
  var x = document.getElementById("snackbar");

  // ajouter "show" class à DIV
  x.className = "show";

  if (vraisOufaux == true) {
    x.innerHTML = 'Bonne réponse';
    x.style.color = 'green';

  }else {
    x.innerHTML = 'Mauvaise reponse';
    x.style.color = 'red';
  }

  // apres 3 seconds, enlever show class de DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

// Combine les questions dans l'ordre souhaité
const quizData = [...cssQuestions ];

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
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = "";

    scoreElement.innerText = score + '/' + quizData.length;
    
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
        scoreElement.innerText = score + '/' + quizData.length;
        mySnack(true);
    }else {
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

      alert(`Fin du quiz. Votre score est de ${score} sur ${quizData.length}.`);
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
