var xhr = new XMLHttpRequest();
xhr.open("GET", "https://8ack.de/plato/api/list/?method=chromeextension", true);
xhr.onreadystatechange = function() {
	if (xhr.readyState == 4) {
		var siteList = JSON.parse(xhr.response);
		chrome.storage.local.set({'siteList': siteList}, function() {
		});	
	}
}
xhr.send();