var servicios = {}
servicios.consultarTarjetas = function (state) {
  fetch('http://localhost:3000/cards/getAllCards')
    .then(res => res.json())
    .then(res => {
      state.tarjetas = res;
    }).catch(function (err) {
      console.log(err);
    });
}

servicios.consultarCategorias = function (state) {
  fetch('http://localhost:3000/categories/getCategories')
    .then(res => res.json())
    .then(res => {
      state.categorias = res;
    }).catch(function (err) {
      console.log(err);
    });
}


export default servicios