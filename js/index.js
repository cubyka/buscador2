$(document).ready(function() {
  $('select').material_select();
  $.ajax({
    url: "server/app2.php",
    type: "GET",
    success: function (elemento){
      var elemento = JSON.parse(elemento);
      console.log(elemento);
      console.log(elemento[1]);
      for (var i = 0; i < Object.keys(elemento).length; i++) {
        console.log(elemento[i]);
        if (typeof elemento[i]!="undefined") {
          var listaCiudades =[]
          for (var r = 0; r < array.length; r++) {
            listaCiudades[r].push(elemento[i])
            console.log(listaCiudades)
            // var insertar = "<option value='"+elemento[i]+"'>"+elemento[i]+"</option>"
            //   $("#selectCiudad option").append(insertar);
          }
        }
      }
      // var listaCiudades = [];
      // listaCiudades.push(elemento)
      // console.log(listaCiudades)
      // for (var i = 0; i < listaCiudades.length; i++) {
      //   console.log(listaCiudades[0][1])
      //   var insertar = "<option value='"+listaCiudades[0][i]+"'>"+listaCiudades[0][i]+"</option>"
      //   $("#selectCiudad option").append(insertar);
      // }
    }
  })
});
/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};
/*
  Función que inicializa el elemento Slider
*/

function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}
/*
  Función que reproduce el video de fondo al hacer scroll, y deteiene la reproducción al detener el scroll
*/
function playVideoOnScroll(){
  var ultimoScroll = 0,
      intervalRewind;
  var video = document.getElementById('vidFondo');
  $(window)
    .scroll((event)=>{
      var scrollActual = $(window).scrollTop();
      if (scrollActual > ultimoScroll){
       video.play();
     } else {
        //this.rewind(1.0, video, intervalRewind);
        video.play();
     }
     ultimoScroll = scrollActual;
    })
    .scrollEnd(()=>{
      video.pause();
    }, 10)
}

inicializarSlider();
// playVideoOnScroll();
/***** Poblar Todos *****/
$("div.card button").click(function(){
  $.ajax({
    url: "server/app.php",
    type: "GET",
    success: function (data){
      var data = JSON.parse(data);
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var insertar = "<div class='card horizontal itemMostrado'><div class='card-image'><img src='img/home.jpg'></div><div class='card-stacked'><div class='card-content'><p>Dirección: "+data[i].Direccion+"</p><p>Ciudad: "+data[i].Ciudad+"</p><p>Telefono: "+data[i].Telefono+"</p><p>Código postal: "+data[i].Codigo_Postal+"</p><p>Tipo: "+data[i].Tipo+"</p><p class='precioTexto'>Precio: "+data[i].Precio+"</p></div><div class='card-action'><a href='#'>Ver más</a></div></div></div>";
        $("div.tituloContenido.card").append(insertar);
      };
    }
  });
})
/***** Fin *****/
