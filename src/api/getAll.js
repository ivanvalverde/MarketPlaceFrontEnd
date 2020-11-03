const getCliente = async (getRota) =>{
    const search = await fetch(`https://enigmatic-earth-80179.herokuapp.com/${getRota}`,  {
        headers: {
          'Access-Control-Allow-Origin':'*',
          'Content-Type': 'application/json'
        }
      });
    const response = await search.json();
    return response
}

export default getCliente;