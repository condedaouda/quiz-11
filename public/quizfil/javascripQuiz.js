

const jsQuestions = [
    {
        question: "Qu'est-ce que JavaScript?",
        options: ["Un langage de programmation pour le web", "Un langage de mise en page", "Un navigateur web populaire", "Une base de données"],
        answer: 0
    },
    {
        question: "Quel mot-clé est utilisé pour déclarer une variable en JavaScript?",
        options: ["int", "string", "let", "var"],
        answer: 3
    },
    {
        question: "Quelle méthode est utilisée pour ajouter un élément au début d'un tableau en JavaScript?",
        options: ["addElement()", "push()", "unshift()", "insertFirst()"],
        answer: 2
    },
    {
        question: "Quelle boucle JavaScript est utilisée pour parcourir les propriétés d'un objet?",
        options: ["for loop", "while loop", "for...in loop", "forEach loop"],
        answer: 2
    },
    {
        question: "Quelle méthode JavaScript est utilisée pour supprimer le dernier élément d'un tableau ?",
        options: ["removeLast()", "pop()", "deleteLast()", "spliceLast()"],
        answer: 1
    },
    {
        question: "Quelle méthode JavaScript est utilisée pour convertir une chaîne de caractères en minuscules?",
        options: ["toLowerCase()", "lowerCase()", "convertToLower()", "caseToLower()"],
        answer: 0
    },
    {
        question: "Quelle méthode JavaScript est utilisée pour trouver la position d'un élément dans un tableau ?",
        options: ["findElement()", "searchElement()", "indexOf()", "getPosition()"],
        answer: 2
    },
    {
        question: "Quelle méthode JavaScript est utilisée pour ajouter un élément à la fin d'un tableau ?",
        options: ["append()", "push()", "addToEnd()", "insertLast()"],
        answer: 1
    },
    {
        question: "Quel type de données peut être stocké dans une valeur de clé JSON?",
        options: ["Seulement des chaînes de caractères", "Seulement des nombres entiers", "Des tableaux, des objets, des chaînes de caractères, des nombres, des booléens, null", "Uniquement des objets JavaScript"],
        answer: 2
    },
    {
        question: "Quel format utilise JSON pour représenter une paire clé-valeur?",
        options: ["clé : valeur", " 'clé' -> 'valeur'", "clé = valeur", "'clé' : 'valeur'"],
        answer: 2
    },
    {
        question: "Quelle méthode JavaScript est utilisée pour convertir une chaîne JSON en un objet JavaScript?",
        options: ["parseJSON()", "toJSON()", "stringify()", "parse()"],
        answer: 3
    },
    {
        question: "Quelle est la fonction de base de jQuery utilisée pour sélectionner un élément par son ID?",
        options: ["$('.id')", "$('#id')", "$('.getElementById')", "$('.find')"],
        answer: 1
    },
    {
        question: "Quelle méthode jQuery est utilisée pour masquer un élément sélectionné?",
        options: ["hide()", "remove()", "displayNone()", "setHidden()"],
        answer: 1
    },
    {
        question: "Quelle méthode jQuery est utilisée pour ajouter une classe à un élément sélectionné?",
        options: ["addClass()", "appendClass()", "insertClass()", "modifyClass()"],
        answer: 0
    },
    {
        question: "Qu'est-ce que JSON ?",
        options: [
            "Un format de données léger utilisé pour l'échange de données sur le web.",
            "Une bibliothèque JavaScript pour les requêtes AJAX.",
            "Un langage de programmation pour créer des sites web.",
            "Un format de stockage de fichiers multimédias."
        ],
        answer: 0
    },
    {
        question: "Que signifie l'acronyme JSON ?",
        options: [
            "JavaScript Object Notation.",
            "JavaScript Oriented Notation.",
            "Java Online Notation.",
            "JavaScript Objectified Network."
        ],
        answer: 0
    },
    {
        question: "Quel type de données peut être stocké dans un objet JSON ?",
        options: [
            "Texte, nombres, objets, tableaux, booléens, null.",
            "Texte uniquement.",
            "Texte et nombres seulement.",
            "Seulement des valeurs booléennes."
        ],
        answer: 0
    },
    {
        question: "Quelle est la structure de base d'un objet JSON ?",
        options: [
            "{ key: value }",
            "[ key: value ]",
            "( key: value )",
            "< key: value >"
        ],
        answer: 0
    },
    {
        question: "Comment séparer les éléments dans un tableau JSON ?",
        options: [
            "Avec des virgules.",
            "Avec des points-virgules.",
            "Avec des tirets.",
            "Avec des espaces."
        ],
        answer: 0
    },
    {
        question: "Quel est le format de données de base utilisé par JSON pour représenter les dates ?",
        options: [
            "ISO 8601.",
            "DateString.",
            "MM/DD/YYYY.",
            "JJ/MM/AAAA."
        ],
        answer: 0
    },
    {
        question: "Comment peut-on commenter dans un fichier JSON ?",
        options: [
            "// commentaire",
            "/* commentaire */",
            "# commentaire",
            "-- commentaire"
        ],
        answer: 1
    },
    {
        question: "Quelle méthode JavaScript est utilisée pour convertir une chaîne JSON en objet JavaScript ?",
        options: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.toObject()",
            "JSON.convert()"
        ],
        answer: 0
    },
    {
        question: "Quelle méthode JavaScript est utilisée pour convertir un objet JavaScript en chaîne JSON ?",
        options: [
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.toObject()",
            "JSON.convert()"
        ],
        answer: 0
    },
    {
        question: "Quelle est la différence fondamentale entre JSON et XML ?",
        options: [
            "JSON est plus léger et plus facile à lire pour les humains, tandis qu'XML est plus verbeux et structuré.",
            "JSON est un langage de programmation, tandis que XML est un format de stockage de données.",
            "JSON est principalement utilisé pour les bases de données, tandis que XML est utilisé pour les interfaces utilisateur.",
            "Il n'y a pas de différence fondamentale entre les deux."
        ],
        answer: 0
    },
    {
        question: "Qu'est-ce qu'AJAX ?",
        options: [
            "Une technique permettant de mettre à jour une page web sans la recharger entièrement.",
            "Une bibliothèque JavaScript pour les requêtes AJAX.",
            "Un langage de programmation pour créer des sites web.",
            "Un format de stockage de fichiers multimédias."
        ],
        answer: 0
    },
    {
        question: "Que signifie l'acronyme AJAX ?",
        options: [
            "Asynchronous JavaScript and XML.",
            "AJAX is not an acronym.",
            "Asynchronous Java and XML.",
            "All JavaScript and XML."
        ],
        answer: 0
    },
    {
        question: "Quel objet JavaScript est souvent utilisé pour effectuer des requêtes AJAX ?",
        options: [
            "XMLHttpRequest.",
            "AJAXRequest.",
            "HTTPObject.",
            "WebObject."
        ],
        answer: 0
    },
    {
        question: "Quel format de données est souvent utilisé dans les échanges AJAX ?",
        options: [
            "JSON (JavaScript Object Notation).",
            "XML (eXtensible Markup Language).",
            "CSV (Comma-Separated Values).",
            "TXT (Plain Text)."
        ],
        answer: 0
    },
    {
        question: "Quel type de requête permet d'envoyer des données vers le serveur avec AJAX ?",
        options: [
            "La méthode POST.",
            "La méthode GET.",
            "La méthode PUSH.",
            "La méthode UPDATE."
        ],
        answer: 0
    },
    {
        question: "Quelle fonction est utilisée pour traiter la réponse d'une requête AJAX ?",
        options: [
            "La fonction callback.",
            "La fonction handleResponse.",
            "La fonction processRequest.",
            "La fonction onAjaxComplete."
        ],
        answer: 0
    },
    {
        question: "Quelle méthode est utilisée pour initialiser une requête AJAX avec XMLHttpRequest ?",
        options: [
            "La méthode open().",
            "La méthode send().",
            "La méthode start().",
            "La méthode begin()."
        ],
        answer: 0
    },
    {
        question: "Quel événement indique que la requête AJAX est terminée ?",
        options: [
            "L'événement 'readystatechange'.",
            "L'événement 'ajaxComplete'.",
            "L'événement 'requestComplete'.",
            "L'événement 'ajaxFinished'."
        ],
        answer: 0
    },
    {
        question: "Quel attribut de l'objet XMLHttpRequest contient la réponse de la requête AJAX ?",
        options: [
            "L'attribut 'responseText'.",
            "L'attribut 'responseData'.",
            "L'attribut 'ajaxResponse'.",
            "L'attribut 'dataReceived'."
        ],
        answer: 0
    },
    {
        question: "Que signifie le terme 'asynchrone' dans AJAX ?",
        options: [
            "Que les requêtes AJAX ne bloquent pas l'exécution du code JavaScript.",
            "Que les requêtes AJAX sont toujours plus lentes que les requêtes synchrones.",
            "Que les requêtes AJAX nécessitent une authentification asynchrone.",
            "Qu'il n'y a pas de signification spécifique dans ce contexte."
        ],
        answer: 0
    },
    {
        question: "Qu'est-ce qu'un WebSocket?",
        options: [
            "Un protocole de communication bidirectionnel en temps réel entre navigateurs et serveurs.",
            "Un élément HTML pour afficher des vidéos en streaming.",
            "Un type de serveur pour stocker des données de session.",
            "Un outil de débogage pour les développeurs web."
        ],
        answer: 0
    },
    {
        question: "Quel avantage les WebSockets offrent-ils par rapport à d'autres techniques de communication?",
        options: [
            "Une connexion persistante permettant un échange de données bidirectionnel en temps réel.",
            "Une meilleure sécurité pour les données transférées.",
            "Une connexion uniquement basée sur HTTP.",
            "Une transmission asynchrone de fichiers volumineux."
        ],
        answer: 0
    },
    {
        question: "Quel est le protocole sous-jacent utilisé par les WebSockets?",
        options: [
            "WebSocket utilise un protocole indépendant, pas de protocole sous-jacent spécifique.",
            "HTTP ou HTTPS.",
            "TCP/IP.",
            "FTP (File Transfer Protocol)."
        ],
        answer: 2
    },
    {
        question: "Qu'est-ce que jQuery ?",
        options: [
            "Une bibliothèque JavaScript.",
            "Un langage de programmation.",
            "Un système de gestion de bases de données.",
            "Un logiciel d'édition de texte."
        ],
        answer: 0
    },
    {
        question: "Quel est l'objectif principal de jQuery ?",
        options: [
            "Faciliter la manipulation du DOM et les interactions avec JavaScript.",
            "Gérer les bases de données MySQL.",
            "Créer des animations graphiques.",
            "Styliser les pages web."
        ],
        answer: 0
    },
    {
        question: "Quelle est la fonction principale de jQuery() ?",
        options: [
            "Sélectionner des éléments dans le DOM.",
            "Créer des variables en JavaScript.",
            "Définir des styles CSS.",
            "Ajouter des événements aux éléments HTML."
        ],
        answer: 0
    },
    {
        question: "Quel symbole est utilisé pour accéder aux éléments HTML dans jQuery ?",
        options: [
            "$",
            "*",
            "&",
            "#"
        ],
        answer: 0
    },
    {
        question: "Quelle méthode est utilisée pour cacher un élément avec jQuery ?",
        options: [
            ".hide()",
            ".display('none')",
            ".hidden()",
            ".visible(false)"
        ],
        answer: 0
    },
    {
        question: "Quelle méthode est utilisée pour ajouter une classe CSS à un élément avec jQuery ?",
        options: [
            ".addClass()",
            ".append()",
            ".css()",
            ".insert()"
        ],
        answer: 0
    },
    {
        question: "Quelle méthode est utilisée pour récupérer le contenu d'un élément HTML avec jQuery ?",
        options: [
            ".text()",
            ".getContent()",
            ".html()",
            ".val()"
        ],
        answer: 2
    },
    {
        question: "Quelle méthode est utilisée pour effectuer une requête AJAX avec jQuery ?",
        options: [
            ".ajax()",
            ".sendRequest()",
            ".fetch()",
            ".getAjax()"
        ],
        answer: 0
    },
    {
        question: "Quel événement est déclenché lorsque le document est prêt à être manipulé dans jQuery ?",
        options: [
            "document.onload()",
            "window.ready()",
            "$.documentReady()",
            "$(document).ready()"
        ],
        answer: 3
    },
    {
        question: "Comment inclure jQuery dans une page web ?",
        options: [
            "<script src='jquery.js'></script>",
            "<link rel='stylesheet' href='jquery.css'>",
            "<div class='jquery'></div>",
            "<meta name='jquery' content='true'>"
        ],
        answer: 0
    }

    // Ajoutez d'autres questions sur JavaScript
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
            clearInterval(interval); // Arrête le compte à rebours
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
const quizData = [...jsQuestions];

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
    } else {
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
