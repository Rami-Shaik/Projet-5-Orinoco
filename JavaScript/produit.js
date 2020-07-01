let url = "http://localhost:3000/api/teddies/";
let params = new URLSearchParams(window.location.search);
let id = params.get("id");
let produitPeluche = document.getElementById("peluche");

let displayProduct = async () => {
    let data = await unePeluche(url, id);
    peluche(data);
    personnalisationPeluche(produitPeluche, data.colors);
    ajoutPanier(produitPeluche, data);
};

let unePeluche = async (productUrl, productId) => {
    let response = await fetch(productUrl + productId);
    return await response.json();
};

let peluche = (productData) => {
    let divElt = document.createElement('div');
    produitPeluche.appendChild(divElt);
    divElt.id = 'affichage';
    let divDeuxElt = document.createElement('div');
    divElt.appendChild(divDeuxElt);
    divDeuxElt.id = 'produit';
    let imageElt = document.createElement('img');
    imageElt.src = productData.imageUrl;
    divDeuxElt.appendChild(imageElt);
    let divTroisElt = document.createElement('div');
    divElt.appendChild(divTroisElt);
    divTroisElt.id = "description";
    let nomElt = document.createElement('h2');
    nomElt.textContent = productData.name;
    divTroisElt.appendChild(nomElt);
    let priceElt = document.createElement('h3');
    priceElt.textContent = ((productData.price) /100) + ' €';
    divTroisElt.appendChild(priceElt);
    let descriptionElt = document.createElement('p');
    descriptionElt.textContent = productData.description;
    divTroisElt.appendChild(descriptionElt);
};

let personnalisationPeluche = (parentElt, produitCouleur) => {
    let divPanierElt = document.createElement('div');
    produitPeluche.appendChild(divPanierElt);
    divPanierElt.id = 'ajout_panier';
    let label = document.createElement("label");
    let select = document.createElement("select");
    label.setAttribute("for", "listeCouleurs");
    label.textContent = "Personnaliser votre ours en peluche : ";
    select.id = "listeCouleurs";
    divPanierElt.appendChild(label);
    divPanierElt.appendChild(select);
    produitCouleur.forEach((couleurs) => {
        let option = document.createElement("option");
        option.value = couleurs;
        option.textContent = couleurs.toUpperCase();
        select.appendChild(option);
    });
    select.addEventListener("change", (e) => {
        choixCouleur = e.target.value.toLowerCase();
        console.log(choixCouleur);
    });
};

let ajoutPanier = (productData) => {
    let divBtnElt = document.createElement('div');
    produitPeluche.appendChild(divBtnElt)
    divBtnElt.id = 'bouton_ajout';
    let btn = document.createElement("button");
    btn.textContent = "Ajouter au panier";
    divBtnElt.appendChild(btn);
    let produit = [
        productData._id,
        productData.name,
        productData.price,
        productData.imageUrl,
    ];
    btn.addEventListener("click", () => {
        localStorage.setItem(productData.name, JSON.stringify(produit));
        btn.classList.add("invisible");
        let divBtnMessageElt = document.createElement('div');
        divBtnElt.appendChild(divBtnMessageElt);
        divBtnMessageElt.textContent = "Le produit vient d'être ajouté au panier !";
        nombreProduit();
    });
};





function chargementPanier(){
    let nombreProduit = localStorage.getItem('qté'); 
    if(nombreProduit){
        document.querySelector ('.totalQté').textContent = nombreProduit;
    }else{
        document.querySelector ('.totalQté').textContent = 0 ;
    }
};

chargementPanier();


function nombreProduit(){  
    let nombreProduit = localStorage.getItem('qté');  
    nombreProduit = parseInt(nombreProduit);
    if (nombreProduit){
        localStorage.setItem("qté", nombreProduit + 1);
        document.querySelector ('.totalQté').textContent = nombreProduit + 1;
    } else{
        localStorage.setItem("qté", 1);
       document.querySelector ('.totalQté').textContent = 1;
    }
} 
 
function ajoutLocalStorage(){
    let panier = localStorage.getItem('panier');
    panier = JSON.parse(panier);
    teddy.qté = 0;
    if(panier != null){
        if(panier[teddy.name] === undefined) {
            panier = {...panier, [teddy.name] : teddy}
        }
        panier[teddy.name].qté += 1;
        } else {
            panier = {[teddy.name] : teddy}
            panier[teddy.name].qté += 1;
        }
        localStorage.setItem("panier", JSON.stringify(panier));
}

displayProduct();































