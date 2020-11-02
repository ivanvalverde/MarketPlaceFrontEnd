const getCliente = async () =>{
    const search = await fetch('https://enigmatic-earth-80179.herokuapp.com/cliente');
    const response = await search.json();
    return response
}

export default getCliente;