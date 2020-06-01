const baseUrl = 'http://localhost:3000';

function toJson(response){
  return response.json();
}

function fetchProducts(){
  return fetch(`${baseUrl}/products/`)
    .then(toJson)
}

export default { fetchProducts };