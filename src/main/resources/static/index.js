const antall = "";
const fornavn ="";
const etternavn ="";
const telefonnr = "";
const epost = "";

let ut = "";

const billettene = [];

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

function visBilletter(){

    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall Biletter</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Email</th>" +
        "</tr>";
    for (let p of billettene){
        ut+="<tr>";
        ut+="<td>"+p.film+"</td><td>"+p.antall+"</td><td>"+p.fornavn + p.etternavn + "</td><td>" + p.telefonNr + "</td>";
        ut+="</tr>";
    }
    console.log(billettene)
    document.getElementById("billettListe").innerHTML=ut;
}
function validerInput(){

    const film = document.getElementById("film").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonNr = document.getElementById("telefonnr").value;
    const email = document.getElementById("epost").value;


    if(antall ===null || fornavn === null || etternavn === null || telefonNr === null || email === null){
        alert("Har aldri sett noen ta så feil!");
    } else {

    }
    opprettBillett();
}

function slettBillettene(){
    billettListe.length = 0;
    visBilletter();
}

