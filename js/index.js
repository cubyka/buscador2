$(document).ready(function () {
  $.ajax({
    url: "server/ciudad.php",
    type: "GET",
    success: function (elemento) {
      $.each(JSON.parse(elemento), function (i, listaCiudades) {
        var insertar = "<option value='" + listaCiudades + "'>" + listaCiudades + "</option>"
        $("#selectCiudad").append(insertar);
      })
      // $('select').material_select();
    }
 })
  $.ajax({
    url: "server/tipo.php",
    type: "GET",
    success: function (elemento){
      elemento = JSON.parse(elemento)
      $.each(elemento, function(i, listaTipo){
        var insertar = "<option value='" + listaTipo + "'>" + listaTipo + "</option>"
        $("#selectTipo").append(insertar);
      })
      $('select').material_select();
    }
  })
});

$("#submitButton").click(function(){
  event.preventDefault();
  var data1 = $('select[name="ciudad"] option:selected').val();
  var data2 = $('select[name="tipo"] option:selected').val();
  /*
  traemos los valores del slider que estan en una cadena de texto separados por ;
  y los separamos con slpit. Recordar que la implementacion del input range Slider
  se hizo con un plugin llamado ionSlider, implentado en line 57
  */
  var data3 = $("#rangoPrecio").val().split(";")[0];
  var data4 = $("#rangoPrecio").val().split(";")[1];
  $.ajax({
    url: "server/buscador.php",
    type: "GET",
    data: { ciudad: data1, tipo: data2, ini: data3, fin: data4 },
    /* Todo lo anterior se puede opitmizar con:
    data: { ciudad: $('select[name="ciudad"] option:selected').val(), tipo: $('select[name="tipo"] option:selected').val() , ini: $("#rangoPrecio").val().split(";")[0], fin: $("#rangoPrecio").val().split(";")[1] },
    */
    sucess: function (dataResult){
      console.log(dataResult)
    }
  })
})
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
