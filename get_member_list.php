<?php
include "db_config.php";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if(!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}

mysqli_query($conn, "SET NAMES 'utf8'");

$sql = "SELECT * FROM member";
$result = mysqli_query($conn, $sql);

$i = 0;
if(mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)) {
		$json[$i]["id"] = $row["id"];
		$json[$i]["name"] = $row["name"];
		$json[$i]["role"] = $row["role"];
		$json[$i]["phone"] = $row["phone"];
		$i++;
	}
}

echo json_encode($json);

mysqli_close($conn);
?>
