<?php
  //leer el documento externo detipo json
  $data = file_get_contents("../data-1.json");
  //decodificar el formato del archivo a un objeto php
  $data = json_decode($data);
  //recorrer el objeto de datos y almacenar en un arreglo
  foreach ($data as $key => $elemento) {
    $tipo[] = $elemento->Tipo;
  }
  //remover las ciudades repetidad del listado
  $tipo = array_unique($tipo);
  //imprimir el arreglo de las ciudades en un formato codificado de tipo json
  echo json_encode($tipo); // imprimimos
?>
