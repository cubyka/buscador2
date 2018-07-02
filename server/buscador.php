<?php
  $ciudad = $_GET['ciudad'];
  $tipo = $_GET['tipo'];
  $ini = $_GET['ini'];
  $fin = $_GET['fin'];
  $elementoFiltrado[] = array();

  $data = file_get_contents("../data-1.json"); //leer documento
  $data = json_decode($data); //decodificar el formato del archivo a un objeto php

  foreach ($data as $key =>$elemento){
    if ($elemento->Ciudad == $ciudad && $elemento->Tipo == $tipo && $elemento->Precio >= $ini && $elemento->precio <= $fin) {
      // $elementoFiltrado[] = array();
      // $elementoFiltrado[] = $elemento;
      array_push($elementoFiltrado,$elemento);
    }
  }
  echo json_encode($elementoFiltrado);
?>
