let billet = {
    film: getElement.By.Id("film").value,
    antall: getElement.By.Id("antall").value,
    fornavn: getElement.By.Id("fornavn").value,
    etternavn: getElement.By.Id("etternavn").value,
    telefonnr: getElement.By.Id("telefonnr").value,
    epost: getElement.By.Id("film").value
}

function velgFilm (){
    alert("Valgte" + getElementById("Velg film").value);
}

function sjekk () {
    const streng = document.getElementById("antall").value;
    const tall = Number(streng);
    if(isNaN(antall)) {
        alert("Ikke et tall!");
    } else {
        alert("Tallet er :"+antall);
    }

}