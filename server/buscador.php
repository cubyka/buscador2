<?php
  $ciudad = $_GET['ciudad'];
  $tipo = $_GET['tipo'];
  $ini = $_GET['ini'];
  $fin = $_GET['fin'];
  // $elementoFiltrado[] = array();

  $data = file_get_contents("../data-1.json"); //leer documento
  $data = json_decode($data); //decodificar el formato del archivo a un objeto php
  foreach ($data as $key =>$elemento){
      /* La vairaible json $elemento->Precio viene en formato $xxx,xxx por eso fue necesario usar el metodo
      str_ireplace donde eliminamos tanto "$" y ",". Ya que causaba problemas para ejecutar la compraracion;

      */

      // if (str_ireplace(["$",","],"",$elemento->Precio)>= $ini) {
      //   echo " ".str_ireplace(["$",","],"",$elemento->Precio)." Es mayor o igual a: ".$ini ;
      // }

    if ($elemento->Ciudad == $ciudad && $elemento->Tipo == $tipo && str_ireplace(["$",","], "",$elemento->Precio) >= $ini  && str_ireplace(["$",","], "",$elemento->Precio)<=$fin) {
      $elementoFiltrado[] = $elemento;
    }
  }
  echo json_encode($elementoFiltrado);
?>
