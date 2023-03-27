let ville = 'Paris';
recevoirTemperature(ville);

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
    ville = prompt('Quelle ville souhaitez-vous voir?');
    recevoirTemperature(ville)
});

function recevoirTemperature(ville) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ ville +
                '&appid=eef24773ceb165fa580be08f57077e83&units=metric'// Créer une requête
     // Créer une requête
    let requete = new XMLHttpRequest();// Je créér un objet

requete.open('GET', url);// Premier paramètre GET / POST, deuxième paramètr : url
requete.responseType = "json";// On attend du JSON
requete.send();// Nous envoyons notre requête

requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
        if(requete.status === 200) {
            let reponse  = requete.response;// on stock la réponse
            let meteo    = reponse.main.temp;
            let ville    = reponse.name;

            document.querySelector('#meteo').textContent = meteo;
            document.querySelector('#ville').textContent = ville;
        
        }
        else {
            alert('Un probléme est intervenu, merci de revenir plus tard');
        }
    }
}

}