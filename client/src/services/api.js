const URL = 'http://127.0.0.1:8000/api/v1/personas/'

export const getPersonas = () => {
    return fetch(URL)
        .then(response => response.json())
        .then(data => data)
}

export const getPersona = (id) => {
    return fetch(`${URL}${id}`)
        .then(response => response.json())
        .then(data => data)
}
export const createPersona = (persona) => {
    const formData = new FormData();
    formData.append('usuario', persona.usuario);
    formData.append('avatar', persona.avatar);

    return fetch(URL, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => data)
}

export const deletePersona = (id) => {
    return fetch(`${URL}${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => data)
}