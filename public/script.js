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

const jsQuestions = [
    {
        question: "Qu'est-ce que JavaScript?",
        options: ["Un langage de programmation pour le web", "Un langage de mise en page", "Un navigateur web populaire", "Une base de données"],
        answer: 0
      },
      {
        question: "Quel mot-clé est utilisé pour déclarer une variable en JavaScript?",
        options: [ "int", "string", "let", "var"],
        answer: 3
      },
      {
        question: "Quelle méthode est utilisée pour ajouter un élément au début d'un tableau en JavaScript?",
        options: [ "addElement()", "push()", "unshift()", "insertFirst()"],
        answer: 2
      },
      {
        question: "Quelle boucle JavaScript est utilisée pour parcourir les propriétés d'un objet?",
        options: [ "for loop", "while loop", "for...in loop", "forEach loop"],
        answer: 2
      },
      {
        question: "Quelle méthode JavaScript est utilisée pour supprimer le dernier élément d'un tableau ?",
        options: [ "removeLast()", "pop()", "deleteLast()", "spliceLast()"],
        answer: 1
      },
      {
        question: "Quelle méthode JavaScript est utilisée pour convertir une chaîne de caractères en minuscules?",
        options: [ "toLowerCase()", "lowerCase()", "convertToLower()", "caseToLower()"],
        answer: 0
      },
      {
        question: "Quelle méthode JavaScript est utilisée pour trouver la position d'un élément dans un tableau ?",
        options: [ "findElement()", "searchElement()", "indexOf()", "getPosition()"],
        answer: 2
      },
      {
        question: "Quelle méthode JavaScript est utilisée pour ajouter un élément à la fin d'un tableau ?",
        options: [ "append()", "push()", "addToEnd()", "insertLast()"],
        answer: 1
      },
      {
        question: "Quel type de données peut être stocké dans une valeur de clé JSON?",
        options: [ "Seulement des chaînes de caractères", "Seulement des nombres entiers", "Des tableaux, des objets, des chaînes de caractères, des nombres, des booléens, null", "Uniquement des objets JavaScript"],
        answer: 2
      },
      {
        question: "Quel format utilise JSON pour représenter une paire clé-valeur?",
        options: [ "clé : valeur", " 'clé' -> 'valeur'", "clé = valeur", "'clé' : 'valeur'"],
        answer: 2
      },
      {
        question: "Quelle méthode JavaScript est utilisée pour convertir une chaîne JSON en un objet JavaScript?",
        options: [ "parseJSON()", "toJSON()", "stringify()", "parse()"],
        answer: 3
      },
      {
        question: "Quelle est la fonction de base de jQuery utilisée pour sélectionner un élément par son ID?",
        options: [ "$('.id')", "$('#id')", "$('.getElementById')", "$('.find')"],
        answer: 1
      },
      {
        question: "Quelle méthode jQuery est utilisée pour masquer un élément sélectionné?",
        options: [ "hide()", "remove()", "displayNone()", "setHidden()"],
        answer: 1
      },
      {
        question: "Quelle méthode jQuery est utilisée pour ajouter une classe à un élément sélectionné?",
        options: [ "addClass()", "appendClass()", "insertClass()", "modifyClass()"],
        answer: 0
      },
      // Ajoutez d'autres questions sur JavaScript
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
const quizData = [...htmlQuestions, ...cssQuestions, ...jsQuestions];

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
