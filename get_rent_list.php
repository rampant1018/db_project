<?php
include "db_config.php";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if(!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}

mysqli_query($conn, "SET NAMES 'utf8'");

$sql = "SELECT * FROM bike_rent";
$result = mysqli_query($conn, $sql);

$i = 0;
if(mysqli_num_rows($result) > 0) {
	while($row = mysqli_fetch_assoc($result)) {
		$json[$i]["member_id"] = $row["member_id"];
		$json[$i]["bike_id"] = $row["bike_id"];
		$json[$i]["station_id_borrow"] = $row["station_id_borrow"];
		$json[$i]["station_id_return"] = $row["station_id_return"];
		$json[$i]["time_borrow"] = $row["time_borrow"];
		$json[$i]["time_return"] = $row["time_return"];
		$i++;
	}
}

echo json_encode($json);

mysqli_close($conn);
?>
