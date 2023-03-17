const url = 'https://blockchain.info/ticker';

function recupererPrix() {
  // Créer une requête
  let requete = new XMLHttpRequest(); // Je créér un objet
  requete.open('GET', url); // Premier paramètre GET / POST, deuxième paramètr : url
  requete.responseType = 'json'; // On attend du JSON
  requete.send(); // Nous envoyons notre requête

  // Dès qu'on reçoit une réponse, cette fonction est executée
  requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response; // on stock la réponse
        let prixEnEuros = reponse.EUR.last;
        document.querySelector('#price_label').textContent = prixEnEuros;
      }
      else {
        alert('Un problème est intervenu, merci de revenir plus tard.');
      }
    }
  }
//   console.log('Prix actualisé');
}

setInterval(recupererPrix, 1000);