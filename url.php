<?php
$url = file_get_contents($_GET['url']);

header('Content-Type: '.mime_content_type($_GET['url']));

echo $url;