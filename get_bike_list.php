<?php
include "db_config.php";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if(!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}

mysqli_query($conn, "SET NAMES 'utf8'");

$sql = "SELECT * FROM bike";
$result = mysqli_query($conn, $sql);

$i = 0;
if(mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)) {
		$json[$i]["id"] = $row["id"];
		$json[$i]["date_buy"] = $row["date_buy"];
		$json[$i]["money_buy"] = $row["money_buy"];
		$json[$i]["brand"] = $row["brand"];
		$json[$i]["status"] = $row["status"];
		$json[$i]["category"] = $row["category"];
		$i++;
	}
}

echo json_encode($json);

mysqli_close($conn);
?>
