const url = "http://localhost:3000/api/teddies";

let requete = new XMLHttpRequest();
requete.open('GET', url);
requete.responseType = "json";
requete.send();

requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
        if (requete.status === 200) {
            let reponse = requete.response;
            console.log(reponse);
        }
    }
};


document.getElementById("listes").innerHTML += '<div id="premier" class="articles"></div>';
document.getElementById("listes").innerHTML += '<div id="deuxieme" class="articles"></div>';
document.getElementById("listes").innerHTML += '<div id="troisieme" class="articles"></div>';
document.getElementById("listes").innerHTML += '<div id="quatrieme" class="articles"></div>';
document.getElementById("listes").innerHTML += '<div id="cinquieme" class="articles"></div>';
