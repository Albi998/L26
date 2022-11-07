//variabili globali//
var btn = document.getElementById('inserisci');

var lista = []; //array del documento

var errore = document.getElementById('errore');

//creo l'oggetto//
function Persona(_nome, _cognome, _eta) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.eta = _eta;
};

window.addEventListener('DOMContentLoaded', init);

function init() {
    errore.style.display = 'none';
    if (lista.length > 0) {
        stampaLista();
    }
};

btn.addEventListener('click', (e) => {
    e.preventDefault;
    let newNome = document.getElementById('nome').value;
    let newCognome = document.getElementById('cognome').value;
    let newEta = document.getElementById('dataNascita').value;

    let newPersona = new Persona(newNome, newCognome, newEta);

    if (newNome == '' || newCognome == "" || newEta == '') {
        document.getElementById('errore').style.display = 'block';
        return;
    }

    lista.push(newPersona);
    stampaLista();
    cancellaForm();
});

function stampaLista() {
    errore.style.display = 'none';
    let soggetti = document.getElementById('lista');
    soggetti.innerHTML = '';
    var userinput = document.getElementById('dataNascita').value;
    var eta = new Date(userinput);
    //calcola i mesi di differenza dalla data corrente
    var month_diff = Date.now() - eta.getTime();
    //converte il calcolo in una data
    var age_dt = new Date(month_diff);
    //estrapola l'annno dal risultato   
    var year = age_dt.getFullYear();
    //ora calcola l'età dell'utente
    var age = Math.abs(year - 1970);
    soggetti.innerHTML += `<tr><th>${nome.value}</th><th>${cognome.value}</th><th>${age}</th></tr>`;
}

function cancellaForm() {
    document.getElementById('nome').value = '';
    document.getElementById('cognome').value = '';
    document.getElementById('dataNascita').value = '';
}