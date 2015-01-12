<?php
include "db_config.php";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if(!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}

mysqli_query($conn, "SET NAMES 'utf8'");

$sql = "SELECT * FROM station";
$result = mysqli_query($conn, $sql);

$i = 0;
if(mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)) {
		$json[$i]["id"] = $row["id"];
		$json[$i]["slot_broken"] = $row["slot_broken"];
		$json[$i]["slot_current"] = $row["slot_current"];
		$json[$i]["slot_all"] = $row["slot_all"];
		$json[$i]["location"] = $row["location"];
		$i++;
	}
}

echo json_encode($json);

mysqli_close($conn);
?>
