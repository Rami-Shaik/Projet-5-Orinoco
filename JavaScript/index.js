let oursElt = document.getElementById('peluches');

fetch('http://localhost:3000/api/teddies/')
.then(response => response.json ())
.then(products => {
    products.forEach( teddy=> {
        let divElt = document.createElement('div');
        divElt.className= "module-border-wrap";
        let divDeuxElt = document.createElement('div');
        divDeuxElt.className= "module";
        let imageElt = document.createElement('img');
        imageElt.src =  teddy.imageUrl;
        let nomElt = document.createElement('h2');
        nomElt.textContent = teddy.name;
        let priceElt = document.createElement('h3');
        priceElt.textContent = ((teddy.price) /100) + ' €';
        let idElt = teddy._id;
        let lienElt = document.createElement('a');
        lienElt.className = "lienProduit";
        lienElt.href = 'produit.html?id=' + teddy._id;
        oursElt.appendChild(divElt);
        divElt.appendChild(divDeuxElt);
        divDeuxElt.appendChild(lienElt);
        lienElt.appendChild(nomElt);
        lienElt.appendChild(imageElt);
        lienElt.appendChild(priceElt);
      });
    })


//Mise a jour du nombre de produit dans l'onglet panier
function chargementPanier(){
  let nombreProduit = localStorage.getItem('qté'); 
  
  if(nombreProduit){
  document.querySelector ('.totalQté').textContent = nombreProduit;
  }else{
      document.querySelector ('.totalQté').textContent = 0 ;
  }
}

chargementPanier();