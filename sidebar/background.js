function openManualPage() {
	var manualurl = "sidebar/doc/manual.html";
	browser.tabs.create({
		"url": manualurl
	});
}

browser.browserAction.onClicked.addListener(openManualPage)