<?php
$tmp_file_name = $_FILES['Filedata']['tmp_name'];
$ok = move_uploaded_file($tmp_file_name, '../../img/slides/'.$tmp_file_name);

echo $ok ? "OK" : "FAIL";

?>