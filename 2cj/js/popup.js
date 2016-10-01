var b = chrome.extension.getBackgroundPage();

//b.showMsg( "hello alpc32");
//alert(b.document.title);

var menus = [
	{id:"copy", name:"网页解禁", click:copyClick, eng:false},
	{id:"show", name:"show", click:showClick, eng:false},
	{id:"item", name:"2taobao", click:itemClick, eng:false},
	{id:"frame", name:"肢解网页", click:frameClick, eng:false}
	//{id:"https", name:"编辑网页", click:editWeb, eng:false}
	//{id:"https", name:"安全加载", click:httpsClick, eng:true},
	//{id:"speed", name:"网速测试", click:speedClick, eng:true}
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

function copyClick(){
	execJs("js/inject/copy.js");
	b.showMsg("恭喜您，可以选择、复制、点击右键啦！");
};

function showClick(){
	//alert( b.title );
	focusOrCreateTab("show.html");
};

function itemClick(){
	//alert( b.title );
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

            //
            console.log('id: '+tab.id);
            console.log('title: '+tab.title);
            //existing_tab = tab;
            //
            //break;
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


    console.log( '123' );

    if (existing_tab) {
        ans[1]=existing_tab;
    } else {
        ans[1]=ans[0];
    }
    ans[0]=227;
    ans[1]=93;

    console.log( ans );
    chrome.tabs.reload(ans[0], function abc() {
    execJs(ans[0], "js/inject/item.js");

    chrome.tabs.update(ans[1], {
			"selected" : true
    });
    });


};


function frameClick(){
	execJs("js/inject/frame.js");
}

function editWeb(){
	execJs("js/inject/edit.js");
}

function speedClick(){
	chrome.tabs.executeScript({"file" : "js/inject/speed.js"});
}

function httpsClick(){
	chrome.tabs.executeScript({"runAt" : "document_start", "file" : "js/inject/https.js"});
}

$(function() {
	initMenu();
});