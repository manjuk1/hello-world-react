export default class CatApi {  
  static getAllCats() {
    return fetch('https://reqres.in/api/unknown').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}


//http://reqres.in/api/unknown
