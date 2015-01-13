function getMemberList() {
	$.ajax({
		type: "GET",
		url: "get_member_list.php",
		async: false,
		cache: false,
		success: function(data) {
			var data = JSON.parse(data)
			$.each(data, function(i, elem) {
				var id = "<td>" + elem.id + "</td>";
				var name = "<td>" + elem.name + "</td>";
				var role = "<td>" + elem.role + "</td>";
				var phone = "<td>" + elem.phone + "</td>";
				var row = "<tr>" + id + name + role + phone + "</tr>";
				$("#member_list").append(row);
			});
		}
	});
}

function getBikeList(table) {
	$.ajax({
		type: "GET",
		url: "get_bike_list.php",
		async: false,
		cache: false,
		success: function(data) {
			var data = JSON.parse(data)
			$.each(data, function(i, elem) {
				var id = "<td>" + elem.id + "</td>";
				var date_buy = "<td>" + elem.date_buy + "</td>";
				var money_buy = "<td>" + elem.money_buy + "</td>";
				var brand = "<td>" + elem.brand + "</td>";
				var status = "<td>" + elem.status + "</td>";
				var category = "<td>" + elem.category + "</td>";
				var row = "<tr>" + id + date_buy + money_buy + brand + status + category + "</tr>";
				$("#bike_list").append(row);
			});
		}
	});
}

function getFixerList() {
	$.ajax({
		type: "GET",
		url: "get_fixer_list.php",
		async: false,
		cache: false,
		success: function(data) {
			var data = JSON.parse(data)
			$.each(data, function(i, elem) {
				var id = "<td>" + elem.id + "</td>";
				var name = "<td>" + elem.name + "</td>";
				var row = "<tr>" + id + name + "</tr>";
				$("#fixer_list").append(row);
			});
		}
	});
}

function getStationList() {
	$.ajax({
		type: "GET",
		url: "get_station_list.php",
		async: false,
		cache: false,
		success: function(data) {
			var data = JSON.parse(data)
			$.each(data, function(i, elem) {
				var id = "<td>" + elem.id + "</td>";
				var broken = "<td>" + elem.slot_broken + "</td>";
				var current = "<td>" + elem.slot_current + "</td>";
				var all = "<td>" + elem.slot_all + "</td>";
				var location = "<td>" + elem.location + "</td>";
				var row = "<tr>" + id + broken + current + all + location + "</tr>";
				$("#station_list").append(row);
			});
		}
	});
}
<<<<<<< HEAD
=======

function getRentList() {
	$.ajax({
		type: "GET",
		url: "get_rent_list.php",
		async: false,
		cache: false,
		success: function(data) {
			var data = JSON.parse(data)
			$.each(data, function(i, elem) {
				var member_id = "<td>" + elem.member_id + "</td>";
				var bike_id = "<td>" + elem.bike_id + "</td>";
				var station_id_borrow = "<td>" + elem.station_id_borrow + "</td>";
				var station_id_return = "<td>" + elem.station_id_return + "</td>";
				var time_borrow = "<td>" + elem.time_borrow + "</td>";
				var time_return = "<td>" + elem.time_return + "</td>";
				var row = "<tr>" + member_id + bike_id + station_id_borrow + station_id_return + time_borrow + time_return + "</tr>";
				$("#rent_list").append(row);
			});
		}
	});
}

function getBikeRepairList() {
	$.ajax({
		type: "GET",
		url: "get_bikeRepair_list.php",
		async: false,
		cache: false,
		success: function(data) {
			var data = JSON.parse(data)
			$.each(data, function(i, elem) {
				var bike_id = "<td>" + elem.bike_id + "</td>";
				var fixer_id = "<td>" + elem.fixer_id + "</td>";
				var Item = "<td>" + elem.Item + "</td>";
				var money = "<td>" + elem.money + "</td>";
				var date = "<td>" + elem.date + "</td>";
				var row = "<tr>" + bike_id + fixer_id + Item + money + date + "</tr>";
				$("#bikeRepair_list").append(row);
			});
		}
	});
}

function getStationRepairList() {
	$.ajax({
		type: "GET",
		url: "get_stationRepair_list.php",
		async: false,
		cache: false,
		success: function(data) {
			var data = JSON.parse(data)
			$.each(data, function(i, elem) {
				var station_id = "<td>" + elem.station_id + "</td>";
				var fixer_id = "<td>" + elem.fixer_id + "</td>";
				var slot_number = "<td>" + elem.slot_number + "</td>";
				var Item = "<td>" + elem.Item + "</td>";
				var money = "<td>" + elem.money + "</td>";
				var date = "<td>" + elem.date + "</td>";
				var row = "<tr>" + station_id + fixer_id + slot_number + Item + money + date + "</tr>";
				$("#stationRepair_list").append(row);
			});
		}
	});
}
>>>>>>> FETCH_HEAD
