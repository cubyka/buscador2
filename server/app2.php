<?php
  $data = file_get_contents("../data-1.json");
  $data = json_decode($data);
  foreach ($data as $key => $elemento) {
    $ciudades[] = $elemento->Ciudad;
  }
  $ciudades = array_unique($ciudades); //eliminamos valores que se repitan
  echo json_encode($ciudades); // imprimimos
?>
