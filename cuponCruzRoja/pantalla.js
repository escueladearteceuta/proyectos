
window.addEventListener('resize', start);

var anchura;

var altura;

const galeria = document.querySelector(".galeria")

const cupones = document.querySelectorAll(".cupon")

const modal = document.querySelector(".modal")

const izq = document.querySelector(".izq")

const der = document.querySelector(".der")

const cierre = document.querySelector(".cierre")

var img = ""
var url = ""

var clicks=0
let posicion=0



var arrayCupones = [...cupones];


arrayCupones.forEach(cupon => {

	console.log(cupon.querySelector("img").src);

	cupon.addEventListener("click", function(e) {
	  
	  	img = cupon.querySelector("img");
	  	url = img.src;
	  	posicion = parseInt(img.getAttribute("data-pos"));

	  	console.log("posicion de la imagen:"+posicion)

	  	url = "url("+url+")";

	  	console.log(url)

	  	document.documentElement.style.setProperty('--url-image', url)

	  	modal.style.display = "block";


	});

});


izq.addEventListener("click", function(e) {
	  
	  	console.log("IZQUIERDA")

	  	posicion-=1

	  	if(posicion < 0){
	  		posicion = arrayCupones.length-1;
	  	}

	  	url = "url("+arrayCupones[posicion].querySelector("img").src+")";

	  	console.log("URL NUEVA IMAGEN:"+url);

	  	document.documentElement.style.setProperty('--url-image', url);
	  	

	});

der.addEventListener("click", function(e) {
	  
	  	console.log("DERECHA")

	  	posicion+=1

	  	console.log("derecha-posicion:"+posicion)

	  	if(posicion >= arrayCupones.length){
	  		posicion = 0;
	  		console.log("derecha-posicion-reseteada:"+posicion)
	  	}



	  	console.log(arrayCupones[posicion])

	  	url = "url("+arrayCupones[posicion].querySelector("img").src+")";

	  	console.log("URL NUEVA IMAGEN:"+url);

	  	document.documentElement.style.setProperty('--url-image', url);
	});


cierre.addEventListener("click", function(e) {
	  
	  	modal.style.display = "none";
	});


modal.addEventListener("click", function(e) {
	  
	  	//modal.style.display = "none";
	});


function start(){
  console.log("Anchura:"+document.documentElement.clientWidth);
  console.log("Altura:"+document.documentElement.clientHeight);

  anchura = document.documentElement.clientWidth;
  altura = document.documentElement.clientHeight;

  if(anchura >= 1050){
		galeria.style.gridTemplateColumns = "repeat(3,1fr)";
		console.log("Cambio de propiedad GRID")
  }
  else{
  	 if(anchura >= 700){
		galeria.style.gridTemplateColumns = "repeat(2,1fr)";
		console.log("Cambio de propiedad GRID")
  	 }
  	 else{
  	 	galeria.style.gridTemplateColumns = "repeat(1,1fr)";
		console.log("Cambio de propiedad GRID")
  	 }
		
  }



}

