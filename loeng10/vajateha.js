const ylesanded = [
    'Pese hambad ja nägu',
    'Toida kassi',
    'Prae muna',
    'Loe hommikusi uudiseid',
    'Jaluta koera'
]

function lisaValjund(tekst) {
    const valjundBlokk = document.getElementById('valjund')
    valjundBlokk.innerHTML += `
    <div>
        <input type="checkbox">
        ${tekst}
    </div>
    `
}

//Seda funktsiooni peaksid saama kasutada koduse harjutuse juures
function lisaPilt(pildiUrl) {
    const valjundBlokk = document.getElementById('valjund')
    valjundBlokk.innerHTML += `
        <img src="${pildiUrl}">
    `
}

function lisaYlesanne() {
    const ylesanneHtml = document.getElementById('sisend')
    ylesanded.push(ylesanneHtml.value)
    document.getElementById('valjund').innerHTML = ''
    valjastaVarvid()
}


function valjastaVarvid() {
    for (let index=0; index < ylesanded.length; index++ ) {
        lisaValjund(ylesanded[index])
    }
}

valjastaVarvid()


