document.addEventListener("DOMContentLoaded", function () {

  // definicija funkcije za rukovanje podacima
  var rukujPodacima = function(podaci, roditelj){
    var ispis = "", nazivFilma, godinaIzlaska, nazivZanra;
    for(let i = 0; i < podaci.length; i++){
        nazivFilma = podaci[i].nazivFilma;
        godinaIzlaska = podaci[i].godinaIzlaska;
        nazivZanra = podaci[i].nazivZanra;
        ispis += "<p><strong>Naziv filma:</strong> " + nazivFilma;
        ispis += "<br /><strong>Godina izlaska:</strong> " + godinaIzlaska;
        ispis += "<br /><strong>Naziv žanra:</strong> " + nazivZanra + "</p>";
        ispis += "<hr />";
    }
    /* postavljanje dohvaćenih podataka u HTML stablo */
    roditelj.innerHTML = ispis;
  }

  // definicija funkcije za rukovanje greškom
  var rukujGreskom = function(greska, roditelj){
    roditelj.innerHTML = "<p>Greška kod obrade zahtjeva: " + greska + "</p>";
  }

  // AJAX - dohvaćanje filmova po žanru
  var zanrovi = document.getElementById("zanrovi");
  var filmoviPoZanru = document.getElementById("filmovipozanru");
  zanrovi.addEventListener("change", function(){
    var zanr = zanrovi.value;
    // fetch(`http://frodo.ess.hr/api/filmovi-po-zanru-json.php?zanr=${zanr}`)
    fetch(`https://hlapcic-education.atwebpages.com/filmovi-po-zanru-json.php?zanr=${zanr}`)
    .then(odgovor => odgovor.json())
    .then(podaci => rukujPodacima(podaci, filmoviPoZanru))
    .catch(greska => rukujGreskom(greska.toString(), filmoviPoZanru));
  });

});