'use strict'

export async function mostrarContatos() {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/`
    const response = await fetch(url)
    const contatos = await response.json()

    return contatos
}

export async function criarContato(contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/`

    const options = {
        'method': 'POST',
        'headers': {
            'content-type': 'application/json'
        },
        'body': JSON.stringify(contato)
    }

    const response = fetch(url, options)

    return response.ok
}

const novoContato = {
    "nome": "Macaco da tasmania",
    "celular": "11 9 7171-1111",
    "foto": "https://img.freepik.com/psd-gratuitas/renderizacao-3d-do-estilo-de-cabelo-para-o-design-do-avatar_23-2151869121.jpg",
    "email": "julio@gmail.com",
    "endereco": "Rua de Jesus, 111",
    "cidade": "Itapevi"
}

async function atualizarContato(id, contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        'method': 'PUT',
        'headers': {
            'content-type': 'application/json'
        },
        'body': JSON.stringify(contato)
    }

    const response = fetch(url, options)

    return response.ok
}

async function deleteContato(id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method:'DELETE'
    }

    const response = await fetch(url, options)
    
    return response.ok
}
