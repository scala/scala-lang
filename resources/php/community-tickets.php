<?php
	header('Content-type: application/json');
	$geturl = "https://issues.scala-lang.org/rest/api/2/search?" . $_SERVER["QUERY_STRING"];
        include "$geturl";
?>
