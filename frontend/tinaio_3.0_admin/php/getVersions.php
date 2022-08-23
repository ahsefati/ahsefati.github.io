<?PHP

$username = "ahs";
$password = "@Kx9%XBl||";
$remote_url = 'https://api.tinaio.net/dashboard/ota/version';

// Create a stream
$opts = array(
  'http'=>array(
    'method'=>"GET",
    'header' => "Authorization: Basic " . base64_encode("$username:$password")                 
  )
);

$context = stream_context_create($opts);

// Open the file using the HTTP headers set above
$file = file_get_contents($remote_url, false, $context);

echo $file;