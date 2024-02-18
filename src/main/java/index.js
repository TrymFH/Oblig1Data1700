const antall = "";

const fornavn ="";

const etternavn ="";

const telefonnr = "";

const epost = "";

let billet = {
    film: document.getElement.By.Id("film").value,
    antall: document.getElement.By.Id("antall").value,
    fornavn: document.getElement.By.Id("fornavn").value,
    etternavn: document.getElement.By.Id("etternavn").value,
    telefonnr: document.getElement.By.Id("telefonnr").value,
    epost: document.getElement.By.Id("film").value
}

let billettene = [];

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

function opprettBillett() { const billett={
    film: document.getElementById("film").value,
    antall : document.getElementById("antall").value,
    firstname: document.getElementById("fornavn").value,
    etternavn: document.getElementById("etternavn").value,
    telefonnr: document.getElementById("telefonnr").value,
    email: document.getElementById("epost").value };

    if (!billett.antall || !billett.fornavn || !billett.etternavn || !billett.telefonnr || !billett.epost ) {
        document.getElementById("AntallError").innerHTML = "Vennigts fyll inn felt";
        document.getElementById("FornavnError").innerHTML = "Vennigtsfyll inn felt";
        document.getElementById("EtternavnError").innerHTML = "Vennigts fyll inn felt";
        document.getElementById("TelefonNrError").innerHTML = "Vennigts fyll inn felt";
        document.getElementById("EpostError").innerHTML = "Vennigts fyll inn felt";
    } else {
        bilettene.push(billett);
    }
}

