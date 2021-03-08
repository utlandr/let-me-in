const url = window.location.href;
browser.storage.sync.get(["interval", "start_date", "end_date"]).then(function(results) {

	console.log(results.interval);
	watchDates = function() {
		fetch(url).then(function(response) {
			if (response.ok) {
				return response.text();
			} else {
				console.log('Request Failed');
				return Promise.reject(response);
			}
		}).then(function(data) {
			let parser = new DOMParser();
			let el = parser.parseFromString(data, 'text/html');
			let ret = el.getElementById("accommodation-calendar-home");
			if (ret){
				dates_raw = ret.getAttribute("data-arrival-dates");
				date_max = Date.parse(ret.getAttribute("data-max-date"));
				if (dates_raw) {
					let dates = dates_raw.split('_');
					let start_date = Date.parse(results.start_date);
					let end_date  = Date.parse(results.end_date);
					let dates_in_range = [];
					for (let i in dates) {
						let date = Date.parse(dates[i]);
						if (start_date <= date && date <= end_date && date <= date_max)
							dates_in_range.push(dates[i]);
					}
					if (dates_in_range.length > 0) {
						console.log(dates_in_range.length + ' MIQ space(s) in range: ' + dates);
						new Notification("MIQ - SPACES DETECTED", {
							body: dates_in_range.toString().replaceAll(",", "\n")
						});
					} else {
						console.log("No spaces in range " + results.start_date + " to " + results.end_date + ": " + dates);
					}
				} else {
					console.log("No dates available");
				}
			} else {
			}
		});
	}

	Notification.requestPermission().then(function(result) {
		  console.log(result);
	});

	setInterval(watchDates, 1000 * results.interval);
});

