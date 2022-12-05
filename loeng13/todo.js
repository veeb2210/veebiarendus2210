const ylesanne1 = {
    kirjeldus: 'Hommikvõimlemine',
    tehtud: true,
    olulisus: 1
}
const ylesanne2 = {
    kirjeldus: 'Praadida mune',
    tehtud: false,
    olulisus: 2
}
const ylesanne3 = {
    kirjeldus: 'Jaluta koera',
    tehtud: false,
    olulisus: 3
}

const ylesanded = [ylesanne1, ylesanne2, ylesanne3]

function valmistaTahekesed(olulisus) {
    let tagasta = ''
    for (let i = 1; i <= olulisus; i++) {
        tagasta += `
        <span class="material-symbols-outlined">
            grade
        </span>        
        `
    }

    return tagasta
}


function naitaYlesannet(ylesanne, index) {
 const valjund = document.getElementById('valjund')
 let isChecked = ""
 if (ylesanne.tehtud) {
    isChecked = "checked=true"
 }

 const tahekesed = valmistaTahekesed(ylesanne.olulisus)
 valjund.innerHTML += `
    <div class="kirjeldus">
        <input type="checkbox" onclick="MuudaCheckboxi(${index})" ${isChecked}>
        ${ylesanne.kirjeldus}
        ${tahekesed}
    </div>
 `
}

function MuudaCheckboxi(index) {
    console.log("Muutsin checkboxi")
    ylesanded[index].tehtud = !ylesanded[index].tehtud
    naitaKoguValjund()
}

function lisaYlesanne() {
    //loe ekraani input elementide väärtused
    const nimetus = document.getElementById('uus_ylesanne').value
    const olulisus = parseInt(document.getElementById('olulisus').value)
    console.log(nimetus, olulisus)
    //loo ülesande objekt
    const uusYlesanne = {
        kirjeldus: nimetus,
        olulisus,
        tehtud: false,
    }
    console.log(uusYlesanne)

    //lisa uus ülesande objekt ylesannete massiivi
    ylesanded.push(uusYlesanne)
    console.log(ylesanded)
    //joonista uuesti väljund
    naitaKoguValjund()
}

function naitaKoguValjund() {
    document.getElementById('valjund').innerHTML = ''
    let i = 0;
    for (y of ylesanded) {
        naitaYlesannet(y, i)
        i += 1
    }
}

naitaKoguValjund()