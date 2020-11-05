const getProviderViaId = async (word) => {

    const search = await fetch(`https://enigmatic-earth-80179.herokuapp.com/fornecedor/${word}`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    });
    const response = await search.json();
    return response

}

export default getProviderViaId;