'use strict'

import { mostrarContatos, criarContato } from "./contatos.js"

console.log(await mostrarContatos())

async function ContatoPage(contato) {
    const contatos = await mostrarContatos()

    const container = document.getElementById('container')

    contatos.forEach(contato => {
        const campoImagem = document.getElementById('preview-image')
        const campoFoto = document.getElementById('foto')
        const a = document.createElement('a')
        a.href = '#'

        a.addEventListener('click', function () {
            const main = document.querySelector('main')
            main.classList.replace('card-show', 'form-show')
            console.log(contato)
            nome.value = contato.nome,
            celular.value = contato.celular,
                email.value = contato.email,
                endereco.value = contato.endereco,
                cidade.value = contato.cidade

        })

        const div = document.createElement('div')
        div.className = 'card-contato'

        const h2 = document.createElement('h2')
        h2.textContent = contato.nome

        const p = document.createElement('p')
        p.textContent = contato.celular

        const img = document.createElement('img')
        img.src = contato.foto

        container.appendChild(a)
        a.appendChild(div)
        div.appendChild(img)
        div.appendChild(h2)
        div.appendChild(p)

        // console.log(h2)
    });
    // console.log(contatos)

}

function novoContato() {
    document.getElementById('novo-contato').addEventListener('click', function () {
        const main = document.querySelector('main')
        main.classList.replace('card-show', 'form-show')
    })
}

function cancelarContato() {
    document.getElementById('cancelar').addEventListener('click', function () {
        const main = document.querySelector('main')
        main.classList.replace('form-show', 'card-show')
    })
}

async function inserirContato() {
    const campoImagem = document.getElementById('preview-image')
    const campoFoto = document.getElementById('foto')

    document.getElementById('salvar').addEventListener('click', function () {
        const novoContato = {
            "nome": nome.value,
            "celular": celular.value,
            "foto": campoImagem.src = URL.createObjectURL(campoFoto.files[0]),
            "email": email.value,
            "endereco": endereco.value,
            "cidade": cidade.value
        }
        criarContato(novoContato)
    })
}


ContatoPage()
novoContato()
cancelarContato()
inserirContato()