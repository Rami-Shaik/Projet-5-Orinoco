let teddy = function (url) {
    return new Promise(function (resolve, reject) {
      let xhr = new XMLHttpRequest();
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.responseText);
          } else {
            reject(xhr);
            alert("Nous sommes désolés, le serveur ne répond pas ! ")
          };
        };
      };
      xhr.open('GET','http://localhost:3000/api/teddies/', true);
      xhr.send();
    });
  };


let catchError = function(e){
  console.error('Erreur AJAX', e);
};


let products = function () {
  return teddy('http://localhost:3000/api/teddies/').then(function (response) {
    let products = JSON.parse(response);
    return products;
  });
};


let oursElt = document.getElementById('peluches');


products().then(function(products){
console.log(products);
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
});

