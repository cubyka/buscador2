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

$("div.card button").click(function(){
  $.ajax({
    url: "server/app.php",
    type: "GET",
    success: function (data){
      var data = JSON.parse(data);
      for (var i = 0; i < data.length; i++) {
        var insertar = "<div class='card horizontal itemMostrado'><div class='card-image'><img src='img/home.jpg'></div><div class='card-stacked'><div class='card-content'><p>Dirección: "+data[i].Direccion+"</p><p>Ciudad: "+data[i].Ciudad+"</p><p>Telefono: "+data[i].Telefono+"</p><p>Código postal: "+data[i].Codigo_Postal+"</p><p>Tipo: "+data[i].Tipo+"</p><p class='precioTexto'>Precio: "+data[i].Precio+"</p></div><div class='card-action'><a href='#'>Ver más</a></div></div></div>";
        $("div.tituloContenido.card").append(insertar);
      }


        // var insertar = "<div>"+elemento.Direccion+"</div>";
        // $("div.colContenido div.card").append(data[0].Direccion);
      //
      // })

    }

  })

})
// <div class='card'>
// <div class='card-image'><img src='img/home.jpg'>
// </div><div class='card-content'>
//   <p>Dirección: +data[i].Direccion</p>
//   <p>Ciudad: +data[i].Ciudad+</p>
//   <p>Telefono: +data[i].Telefono+</p>
//   <p>Código postal: +data[i].Codigo_Postal+</p>
//   <p>Tipo: +data[i].Tipo+</p>
//   <p>Precio: +data[i].Precio+</p>
// </div>
// </div>

// $(document).ready(function() {
// $('select').material_select();
// });
