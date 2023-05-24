import './App.css';

function App() {
  
  const korisnik = {
    ime: "Pero",
    prezime: "Perić"
  };

  const adresa = "Gajeva ulica 1, Varaždin";

  const imePrezime = podaciKorisnika => podaciKorisnika.ime + " " + podaciKorisnika.prezime;

  const prijateljIliStranac = podaciKorisnika => {
    if(podaciKorisnika.prezime === "Perić"){
      	return "Pozdrav prijatelju!";
    }
    else{
      return "Pozdrav stranče.";
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Podaci o korisniku</h1>
        <p>Pozdrav {korisnik.ime}</p>
        <p>Ime Prezime: {korisnik.ime} {korisnik.prezime}</p>
        <p>Adresa: {adresa}</p>
        <h2>Ispis pomoću funkcija</h2>
        <p>Ime Prezime: {imePrezime(korisnik)}</p>
        <p>{prijateljIliStranac(korisnik)}</p>
      </header>
    </div>
  );
}

export default App;
