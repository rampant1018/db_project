<?php
include "db_config.php";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if(!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}

mysqli_query($conn, "SET NAMES 'utf8'");

$sql = "SELECT * FROM bike_repair";
$result = mysqli_query($conn, $sql);

$i = 0;
if(mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)) {
		$json[$i]["bike_id"] = $row["bike_id"];
		$json[$i]["fixer_id"] = $row["fixer_id"];
		$json[$i]["Item"] = $row["Item"];
		$json[$i]["money"] = $row["money"];
		$json[$i]["date"] = $row["date"];
		$i++;
	}
}

echo json_encode($json);

mysqli_close($conn);
?>
