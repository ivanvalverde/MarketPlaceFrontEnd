const getOneUser = async (modelo, email) => {

    const search = await fetch(`https://enigmatic-earth-80179.herokuapp.com/${modelo}/email/${email}`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    });
    const response = await search.json();
    return response

}

export default getOneUser;