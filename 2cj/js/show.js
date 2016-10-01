var b = chrome.extension.getBackgroundPage();

var menus = [
	{id:"copy", name:"show", click:showClick, eng:false},
	//{id:"image", name:"提炼图片", click:imageClick, eng:false},
	{id:"item", name:"2taobao", click:itemClick, eng:false},
];

function execJs(tabid, js) {
	chrome.tabs.executeScript(tabid, {"allFrames" : true, "file" : js});
	//window.close();
}

function execJsWorkAround(js) {
	chrome.tabs.update({"url" : "javascript:"+js});
}

function initMenu() {

	var showEng = false;
	var engModeEnabled = b.getConfig("engmode");
	if(engModeEnabled=="true") {
		showEng = true;
	}
	$.each(menus, function(i, e) {
		if(!e.eng || showEng){		
			var li = $("<div class='item' id='"+e.id+"'>"+e.name+"</div>");
			li.click(e.click);
			$("#menu").append(li);
		}
	});
}

function showClick(){
	//alert( b.title );
	focusOrCreateTab("show.html", function(tab) {
		//execJs(tab.id, "js/inject/image.js");
		chrome.tabs.update(tab.id, {
			"selected" : true
		});
	});

};

/*
function imageClick(){
	//alert( b.title );
	focusOrCreateTab("pic.html", function(tab) {
		execJs(tab.id, "js/inject/image.js");
		chrome.tabs.update(tab.id, {
			"selected" : true
		});
	});
};
*/

function itemClick(){
	chrome.windows.getAll({
		"populate" : true
	}, function(windows) {
        itemClick1(windows);
	});
};

function itemClick1(windows){
	var ans=[1, 2];

    var existing_tab = null;
    for ( var i in windows) {
        var tabs = windows[i].tabs;
        for ( var j in tabs) {
            var tab = tabs[j];
            console.log('id: '+tab.id);
            console.log('title: '+tab.title);
            if (tab.url == chrome.extension.getURL('pic.html')) {
                existing_tab = tab;
                break;
            }
        }
    }

    for ( var i in windows) {
        var tabs = windows[i].tabs;
        for ( var j in tabs) {
            var tab = tabs[j];
            ans[0]=tab.id;
            break;
            }
        break;
    }

    if (existing_tab) {
        ans[1]=existing_tab;
    } else {
        ans[1]=ans[0];
    }
    ans[0]=227;
    ans[1]=93;

    console.log( ans );
    chrome.tabs.reload(ans[0], function abc() {
    //execJs(ans[0], "js/inject/item.js");

    chrome.tabs.update({
			"selected" : true
    });
    });


};

$(function() {
	initMenu();
});