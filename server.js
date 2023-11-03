const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 Savage': {
        'birthName': 'Abraham',
        'birthLocation': 'London, England',
        'Age': 29
    },
    'Chance the rapper': {
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois',
        'Age': 29
    },
    'Unknown': {
        'birthName': 'Unknown',
        'birthLocation': 'Unknown',
        'Age': 'Unknown'
    },
    
}

app.get('/',(request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(rappers)
})
app.get('/api/:name', (request, response) => {
    const rapperName = (request.params.name)
    if (rappers[rapperName]){
        response.json(rappers[rapperName].birthName)
    }
    else{
        response.json(rappers['Unknown'].birthName)
    }
})

app.listen(PORT, ()=> {
    console.log(`The server is now running on port ${PORT}! Better go catch it!`)
})