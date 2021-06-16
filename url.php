<?php
$url = file_get_contents($_GET['url']);
header('Content-Type: image/gif');
echo $url;