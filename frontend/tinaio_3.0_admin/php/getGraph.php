<?php

$username = 'ahs';
$password = '@Kx9%XBl||';
$url = "https://api.tinaio.net/dashboard/graph";
 
$context = stream_context_create(array(
    'http' => array(
        'header'  => "Authorization: Basic " . base64_encode("$username:$password")
    )
));
$data = file_get_contents($url, false, $context);


file_put_contents("graph.json", $data);

