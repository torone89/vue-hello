
// VERIFICA COLLEGAMENTO JAVA
console.log("JS")

// VERIFICA COLLEGAMENTO VUEJS

console.log('Vue ok', Vue)


// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const root = new Vue({
    el: '#root',
    name: 'Start Vue',
    data: {
        saluto: "Ciao sono Francesco",
        immagine: 'https://unsplash.it/600/300?image=2'
    }
})