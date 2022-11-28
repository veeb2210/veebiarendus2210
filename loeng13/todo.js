const ylesanne1 = {
    kirjeldus: 'Hommikvõimlemine',
    tehtud: true,
    olulisus: 2
}
const ylesanne2 = {
    kirjeldus: 'Praadida mune',
    tehtud: false,
    olulisus: 4
}
const ylesanne3 = {
    kirjeldus: 'Jaluta koera',
    tehtud: false,
    olulisus: 5
}

const ylesanded = [ylesanne1, ylesanne2, ylesanne3]

function naitaYlesannet(ylesanne) {
 const valjund = document.getElementById('valjund')
 let isChecked = ""
 if (ylesanne.tehtud) {
    isChecked = "checked=true"
 }
 valjund.innerHTML += `
    <div class="kirjeldus">
        <input type="checkbox" ${isChecked}>
        ${ylesanne.kirjeldus}
    </div>
 `
}

for (y of ylesanded)
naitaYlesannet(y)