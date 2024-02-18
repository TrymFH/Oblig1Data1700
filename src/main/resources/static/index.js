//Variabelen skal brukes til å gi info til klienten, innhold skal bli lagt til
let ut = "";

//En liste som skal holde på info til de ulike billettene. :-)
const billettene=[];

//RegEx som skal validere input senere.
const antallRegEx = /^[1-9][0-9]?$|^100$/;
const navnRegEx = /^([a-zA-Z-]{1,20})/;
const telefonRegEx = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;
const epostRegEx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})([a-z]{2,8})?$/;



//B for boolean som skal brukes senere til å validere klient input.
let filmB = false;
let antallB = false;
let fnavnB = false;
let enavnB = false;
let telnrB = false;
let epostB = false;

//Dette er funksjonen som skal hent input før den validerer verdiene
function hentInput(){

    const film = document.getElementById("film-select").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonNr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    validering(film,antall,fornavn,etternavn,telefonNr,epost);
}

//Funksjon som legger til verdiene som et objekter i liste. Den starter også funksjonen som viser billettene til klienten.
function registrerBilletter(fl,at,fn,et,tn,ep){

    const billett={
        film : fl,
        antall : at,
        fornavn :fn,
        etternavn:et,
        telefonNr:tn,
        epost:ep
    };
    billettene.push(billett);
    visBilletter()
}



//Verdiene fra 'hentInput()' valideres, testes mot regex
//Feilmeldinger og if-setninger som sjekker om input er gyldig og lager billett hvis de er.
function validering(fl,at,fn,en,tn,ep){

    if(fl === "1"){
        filmFeil()
        filmB = false;
    } else{
        filmB = true;
        console.log("film")
    }
    if (antallRegEx.test(at)){
        antallB = true;
        console.log("antall")
    } else{
        antallFeil();
    }

    if (navnRegEx.test(fn)){
        fnavnB = true;
        console.log("fornavn")
    } else {
        fornavnFeil()
    }
    if (navnRegEx.test(en)){
        enavnB = true;
        console.log("etternavn")
    } else {
        etternavnFeil()
    }

    if (telefonRegEx.test(tn)){
        telnrB = true;
        console.log("telefon")
    } else {
        telefonNrFeil()
    }

    if (epostRegEx.test(ep)){
        epostB = true;
        console.log("epost")
    }else {
        epostFeil()
    }

    if (filmB === true && antallB === true && fnavnB === true && enavnB === true && telnrB === true && epostB === true){
        registrerBilletter(fl,at,fn,en,tn,ep)
    }

}

//Dette er feilmeldingsfunksjonene, vises når feil input
function filmFeil(){
    const x = document.getElementById("filmValidering");
    x.setAttribute("style", "display: block;")
}
function antallFeil(){
    const x = document.getElementById("antall-validering");
    x.setAttribute("style", "display: block;")
}
function fornavnFeil(){
    const x = document.getElementById("fornavn-validering");
    x.setAttribute("style", "display: block;")
}
function etternavnFeil(){
    const x = document.getElementById("etternavn-validering");
    x.setAttribute("style", "display: block;")
}
function telefonNrFeil(){
    const x = document.getElementById("telefonnr-validering");
    x.setAttribute("style", "display: block;")
}
function epostFeil(){
    const x = document.getElementById("epost-validering");
    x.setAttribute("style", "display: block;")
}

//Resetter formen.
function ryddForm(){
    const form = document.getElementById("billettSkjema");
    const filmSelect = document.getElementById("film-select");

    const filmFeilTekst = document.getElementById("filmValidering");
    const antallFeilTekst = document.getElementById("antall-validering");
    const fornavnFeilTekst = document.getElementById("fornavn-validering");
    const etternavnFeilTekst = document.getElementById("etternavn-validering");
    const telefonFeilTekst = document.getElementById("telefonnr-validering");
    const epostFeilTekst = document.getElementById("epost-validering");

    filmFeilTekst.setAttribute("style","display: none;")
    antallFeilTekst.setAttribute("style","display: none;")
    fornavnFeilTekst.setAttribute("style","display: none;")
    etternavnFeilTekst.setAttribute("style","display: none;")
    telefonFeilTekst.setAttribute("style","display: none;")
    epostFeilTekst.setAttribute("style","display: none;")


    filmB = false;
    antallB = false;
    fnavnB = false;
    enavnB = false;
    telnrB = false;
    epostB = false;

    form.reset();
    filmSelect.selectedIndex = 0;
}

//denne funksjonen sletter billettene ved å sette arrayets lengde til 0. Viser så frem det nye listen
function slettBilettene(){
    billettene.length = 0;
    visBilletter();

}

//Denne funksjonen legger til verdiene fra billett-arrayet på siden vha ut.
function visBilletter(){
    // skriv ut
    let ut = "<table class='table'><tr>" +
        "<th>Film</th><th>Antall Billetter</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Epost</th>" +
        "</tr>";
    for (let p of billettene){
        ut+="<tr>";
        ut+="<td>"+p.film+"</td><td>"+p.antall+"</td><td>"+p.fornavn + "</td><td>" + p.etternavn  + "</td><td>" + p.telefonNr  + "</td><td>" + p.epost + "</td>";
        ut+="</tr>";
    }
    console.log(billettene)
    document.getElementById("billettene").innerHTML=ut;
    ryddForm();
}

