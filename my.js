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
