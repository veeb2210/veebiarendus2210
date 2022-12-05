const express = require('express')
const app = express()

function tervitus(request, response) {
    response.end("Tervitused kõigile!")
}

function tervitusHtml(request, response) {
    const kuupaev = new Date()
    let tund = kuupaev.getHours()
    console.log('tund', tund)

    let tervitus = "Tere hommikust"
    if (tund > 12) {
        tervitus = "Toredat pealelõunat"
    }
    if (tund > 19) {
        tervitus = "Ilusat õhtut"
    }
    response.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Tervitused kõigile</h1>
        <div>${tervitus}</div>
    </body>
    </html>   
    `)
}

function tervitusAndmed(request, response) {
    const kuupaev = new Date()
    let tund = kuupaev.getHours()
    console.log('tund', tund)

    let tervitus = "Tere hommikust"
    if (tund > 12) {
        tervitus = "Toredat pealelõunat"
    }
    if (tund > 19) {
        tervitus = "Ilusat õhtut"
    }
    const vastus = {
        tervitusPeamine: "Tervitused kõigile",
        detailid: tervitus,
    }

    response.json(vastus)
}

app.get('/', tervitus)
app.get('/tervitus', tervitusHtml)
app.get('/api/tervitus', tevitusAndmed)


app.listen(80)