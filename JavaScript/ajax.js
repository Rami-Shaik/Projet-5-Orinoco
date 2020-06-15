// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {
    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

function afficher(reponse) {
    console.log(reponse);
}

ajaxGet("http://localhost:3000/api/teddies", afficher);



let articlesElt = document.getElementById("peluches");
ajaxGet("http://localhost:3000/api/teddies", function (reponse) {
    // Transforme la réponse en un tableau d'articles
    let articles = JSON.parse(reponse);
    articles.forEach(function (article) {
        // Ajout du titre et du contenu de chaque article
        let nomElt = document.createElement("h2");
        nomElt.textContent = article.name;
        let prixElt = document.createElement("h3");
        prixElt.textContent = article.price;
        articlesElt.appendChild(nomElt);
        articlesElt.appendChild(prixElt);
    });
});

document.getElementById('peluches').innerHTML += '<div id= "premier" class="article"></div>';
document.getElementById('peluches').innerHTML += '<div id= "deuxieme" class="article"></div>';
document.getElementById('peluches').innerHTML += '<div id= "troisieme" class="article"></div>';
document.getElementById('peluches').innerHTML += '<div id= "quatrieme" class="article"></div>';
document.getElementById('peluches').innerHTML += '<div id= "cinquieme" class="article"></div>';

