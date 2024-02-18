const antall = "";
const fornavn ="";
const etternavn ="";
const telefonnr = "";
const epost = "";

let ut = "";

const billettene = [];

function velgFilm (){
    alert("Valgte" + getElementById("Velg film").value);
}

function validerInput (){

}

function opprettBillett() {
    const billett={
    film: document.getElementById("film").value,
    antall : document.getElementById("antall").value,
    firstname: document.getElementById("fornavn").value,
    etternavn: document.getElementById("etternavn").value,
    telefonnr: document.getElementById("telefonnr").value,
    email: document.getElementById("epost").value
    };
    billettene.push(billett);
}

