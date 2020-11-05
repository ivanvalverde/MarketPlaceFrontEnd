const putUser = async (body, modelo, id) => {

    const insere = await fetch(`https://enigmatic-earth-80179.herokuapp.com/${modelo}/altera/${id}`, {
        method: 'PUT',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(body), 
        mode: 'cors', 
        cache: 'default'
    })

    const response = await insere.json();
    return response;

}

export default putUser;