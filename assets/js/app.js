var url = "data/earth-like-results.json";

var plantilla = '<div class="row">'+
		'<div class="col s12 m7">'+
		'<h2 class="header">__nombre__</h2>'+
		'<div class="card horizontal">'+
		'<div class="card-image">'+
		'<img class="responsive-img" style="height: 50vh" src="static/img/planets.jpg">'+
		'</div>'+
		'<div class="card-stacked">'+
		'<div class="card-content">'+
		'<p>__densidad__ density</p>' +
		'<p>Discovered in __disc__ with __telescopio__</p>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>';

var crearTarjeta = function(resultado){
	var nuevaPlantilla = " ";
	resultado.forEach(function (response) {
    var nombre = response.pl_name;
    var densidad = response.ra;
    var fecha = response.pl_disc;
    var telescopio = response.pl_telescope;

    var contenedorPlanetas = document.getElementById('tarjetas');

    nuevaPlantilla += plantilla
    	.replace("__nombre__", nombre)	
    	.replace("__densidad__", densidad)
    	.replace("__disc__", fecha)
    	.replace("__telescopio__", telescopio);
    contenedorPlanetas.innerHTML = nuevaPlantilla;
	});
}



function getJSON(url) { 

  return new Promise(function(resolve, reject) {
    var ajax = new XMLHttpRequest();
    ajax.open("GET",url);
    ajax.send();

    ajax.onreadystatechange = function(){
      if(ajax.readyState == 4){ 
        resolve(JSON.parse(ajax.responseText))
      }
    }
  });
}

getJSON(url)

.then(function(mensaje){
  return Promise.all(
    mensaje.results.map(getJSON)
  );
})
.then(function(resultado) {
  console.log(resultado);
  crearTarjeta(resultado);
});

