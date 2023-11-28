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
