let nimi
let blokk

nimi = prompt('Sisesta nimi')
//alert('Tere ' + nimi)
console.log(nimi)
blokk = document.getElementById('valjund')
blokk.innerText = 'Tere, ' + nimi

for (let index = 1; index < 11; index++) {
    console.log('Number: ' + index)
}



console.log('Programm lõpetas')
