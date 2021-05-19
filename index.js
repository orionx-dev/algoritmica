const https = require('https')
const crypto = require('crypto')
const fs = require('fs')

const start = Date.now()

function hacerRequest() {
  https.request('https://orionx.com', res => {
    res.on('data', () => {})
    res.on('end', () => {
      console.log('HTTPS:', Date.now() - start)
    })
  })
}

function hacerHash() {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('Hash:', Date.now() - start)
  })
}

function leerArchivo() {
  fs.readFile('index.js', 'utf8', () => {
    console.log('File: ', Date.now() - start)
  })
}

function ponerTimer() {
  setTimeout(() => {
    console.log('Timer:', Date.now() - start)
  }, 1)
}

hacerRequest()
leerArchivo()
hacerHash()
hacerHash()
ponerTimer()
hacerHash()
hacerHash()
