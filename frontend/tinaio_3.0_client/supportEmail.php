<?php
$to = "ahsefati77@gmail.com";
$subject = $_GET["name"];
$txt = $_GET["message"];
$headers = $_GET["email"];

mail($to,$subject,$txt,$headers);
?>