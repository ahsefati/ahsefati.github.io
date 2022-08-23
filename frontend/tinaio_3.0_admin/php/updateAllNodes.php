<?PHP

$username = "ahs";
$password = "@Kx9%XBl||";
$version = $_POST["version"];
$remote_url = 'https://api.tinaio.net/dashboard/ota/all';

// Create a stream
$opts = array(
    'http'=>array(
    'method'=>"POST",
    'header' => "Authorization: Basic " . base64_encode("$username:$password")."\r\n"."Content-Type: application/json\r\n",
    'content' => json_encode(["version"=>$version])                 
  )
);

$context = stream_context_create($opts);

// Open the file using the HTTP headers set above
$file = file_get_contents($remote_url, false, $context);

echo $file;