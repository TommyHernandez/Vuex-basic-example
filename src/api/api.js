const urlBase = 'https://swapi.co/api/';
const getList = (type = 'planets',page = 1) => {
  return new Promise((resolve, reject) => {
    fetch(`${urlBase}${type}/?page=${page}&format=json`).then(response => {
        return response.json();
    }).then(json => {
        resolve(json);
    }).catch((err) => {
      reject(err);
    });
})
}
const Api = {
  getList
}
export default Api;