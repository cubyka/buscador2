<?php
// $data = file_get_contents("../data-1.json");
// $inmuebles = json_decode($data);
// $ciudades = [];
// foreach ($inmuebles as $key => $json) {
// $ciudades[] = $json->Ciudad;
// }
// $ciudades = array_unique($ciudades); //eliminamos valores que se repitan
// print_r($ciudades); // imprimimos

$file = fopen("../data-1.json","r"); //abrimos el archivo
$data = fread($file, filesize("../data-1.json")); //leemos el archivo
//recorremos el arreglo creando un nuevo arreglo que tenga solo las puras ciudades
$data = json_decode($data);
foreach ($data as $key => $elemento) {
  $ciudades[] = $elemento->Ciudad;
}
$ciudades = array_unique($ciudades); //eliminamos valores que se repitan

fclose($file); // cerramos archivo
// print_r($ciudades); // imprimimos
echo json_encode($ciudades);
 ?>
