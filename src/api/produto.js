const getProduto = async () =>{
    const search = await fetch('https://enigmatic-earth-80179.herokuapp.com/produto');
    const response = await search.json();
    return response
}

export default getProduto;