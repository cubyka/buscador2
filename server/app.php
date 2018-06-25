<?php
  $file = fopen("../data-1.json","r"); //abrimos el archivo
  $data = fread($file, filesize("../data-1.json")); //leemos el archivo
  fclose($file); // cerramos archivo
  print_r($data); // imprimimos

/*
  Nota: Otras versiones de xampp parecen funcionar con el codigo descrito abajo.
  si se ocupa este codigo habria que omitir Json.parse en el JS

  $file = fopen("../data-1.json","r"); //abrimos el archivo
  $data_file = fread($file, filesize("../data-1.json")); //leemos el archivo
  $data = json_decode($data_file, true); //decodificamos a cadena
  fclose($file); // cerramos archivo
  echo json_encode($data); //regresamos a formato json
*/

 ?>
