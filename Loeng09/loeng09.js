let nimi = prompt('Sisesta enda nimi')
console.log('Nimi on: ' + nimi + ' ja selles on ' + nimi.length + ' tähte')
console.log(`Nimi on: ${nimi} ja selles on ${nimi.length} tähte`)
let taishaalikud = 'aeiouõäöü'
let nimiIKeeles = ''

for (let index = 0; index < nimi.length; index++) {
    if (taishaalikud.includes(nimi[index])) {
        console.log('i')
        nimiIKeeles = nimiIKeeles + 'i'
    } else {
        console.log(nimi[index])
        nimiIKeeles += nimi[index]
    }
}

if ( nimi.length < 8) {
    console.log('Sul on ilus lühike nimi')
} else {
    console.log('Eriti pikk nimi on Sul')
}

console.log('Nimi iii keeles: ' + nimiIKeeles)
let valjundBlokk = document.getElementById('valjund')
valjundBlokk.innerHTML = '<h2>Sinu nimi iii keeles: ' + nimiIKeeles + '</h2>'