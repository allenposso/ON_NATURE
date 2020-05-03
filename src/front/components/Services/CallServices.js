var servicios = {}
servicios.consultarTarjetas = function () {
  return new Promise(function (resolve, reject) {
    fetch('http://localhost:3000/cards/getAllCards')
      .then(res => res.json())
      .then(res => {
        resolve({ data: res });
      }).catch(function (err) {
        reject(err);
      });
  });
}

servicios.consultarCategorias = function () {
  return new Promise(function (resolve, reject) {
    fetch('http://localhost:3000/categories/getCategories')
      .then(res => res.json())
      .then(res => {
        resolve({ data: res });
      }).catch(function (err) {
        reject(err);
      });
  });
}


export default servicios