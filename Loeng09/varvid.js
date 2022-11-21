function valjastaRuutJaKuup(x) {
    console.log(x * x)
    console.log(Math.pow(x, 3))
}

valjastaRuutJaKuup(100)
valjastaRuutJaKuup(25)
valjastaRuutJaKuup(3)

function valjasta(tekst) {
    let valjundBlokk = document.getElementById('valjund')
    valjundBlokk.innerHTML += '<div>' + tekst + '</div>'
}

function arvaVarv() {
    let varv = document.getElementById('sisend').value

    let minuLemmikvarv = 'roheline'

    if (varv === minuLemmikvarv) {
        valjasta('Tore! Arvasid ära minu lemmikvärvi!')
    } else {
        valjasta('See ei ole minu lemmikvärv')
    }
}



