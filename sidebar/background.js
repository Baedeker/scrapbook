// Helper function in logging any errors within menu creation
function onCreated() {
	if (browser.runtime.lastError) {
		console.log(`Error: ${browser.runtime.lastError}`);
	} else {
		console.log("Item created successfully");
	}
}

// Creating the menu items 
browser.menus.create({
	id: "test", 
	title: browser.i18n.getMessage("menuItemTest"),
	contexts: ["all"],
}, onCreated); 

browser.menus.create({
	id: "test", 
	title: browser.i18n.getMessage("menuItemOpenSidebar"),
	contexts: ["all"],
  	command: "_execute_sidebar_action"
}, onCreated); 

// Function to open the manual in a new tab
function openManualPage() {
	var manualurl = "sidebar/doc/manual.html";
	browser.tabs.create({
		"url": manualurl
	});
}

// EventListener for the icon button the Firefox toolbar
browser.browserAction.onClicked.addListener(openManualPage)

// EventListener for the newly added menu items
browser.menus.onClicked.addListener((info, tab) => {
	switch (info.menuItemId) {
		case "test": 
			console.log("\"Test\" was selected in the menu."); 
			alert("You have selected \"Test\" in the menu."); 
			break; 
		case "open-sidebar" : 
			console.log("Opening sidebar."); 
			break; 
	}
});