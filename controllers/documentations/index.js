module.exports = msg => {
    if (msg.text === 'documentos') {
        return docs
    } else {
        return []
    }
}

const docs = [
    'https://medium.com/@sunilk/ionic-capacitor-vs-apache-cordova-difference-with-example-the-next-future-innovation-of-hybrid-93b1317e08cc'
]
