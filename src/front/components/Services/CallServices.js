var servicios = {}
servicios.consultarTarjetas =  function(state){
        fetch('localhost:3000/getCards')
        .then(res => res.json())
        .then(res =>{
          state.tarjetas = res;
        }).catch(function(err){
           console.log(err);
        });
}


export default servicios