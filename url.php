<?php
$url = file_get_contents($_GET['url']);

header("Access-Control-Allow-Origin: *");
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Content-Type: '.mime_content_type($_GET['url']));

echo $url;