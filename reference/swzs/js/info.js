var imgs = new Array();
var userName = null
var i = null
var list = []
setInterval(function(){ 
	console.log("info doing")
	userList = document.getElementsByClassName("user-name")
	for(var i=0; i<userList.length; i++){
		console.log(userList[i].textContent)
		var has = 0;
		for (var j=0; j<list.length; j++) {
			if (list[j] == userList[i].textContent) {
				has = 1
			}
		}
		if (has == 0) {
			list.push(userList[i].textContent)
		}
	}
},
1000);

// axios.defaults.baseURL = 'http://119.29.186.141:8888';
// axios.defaults.baseURL = 'http://127.0.0.1:6666';

setInterval(function(){ 
	console.log("upload")
	console.log(list)
	/*
	$.get("http://127.0.0.1:2222/upload", function(data, status){
		console.log(data)
	})
	*/
	$.post("http://119.29.186.141:3333/upload", {data: JSON.stringify(list) }, function(data, status){
	// $.post("http://119.29.186.141:3333/upload", {data: '好吃点' }, function(data, status){
	/// $.post("http://127.0.0.1:3333/upload", {'data': '好吃点' }, function(data, status){
		console.log(data)
	})

	/*
	axios.post('/upload', {
		data: JSON.stringify(list)
	  })
	  .then(function (response) {
		console.log(response);
	  })
	  */
	list = []
},
20000);
/*
console.log(document.getElementsByClassName("user-name"))


var temp = document.getElementsByClassName("user-name")
imgs.push({
	"src" 	:  document.getElementsByClassName("user-name")
});
for(var i=0; i<temp.length; i++){
	console.log(temp[i].textContent)
	imgs.push({
		"src" 	: temp[i].textContent, 
		"width" : 0, 
		"height": 0, 
		"from" 	: location.host+location.pathname
	});
}
*/

/*
for(var i=0; i<document.images.length; i++){
	var src = document.images[i].src;
	var exist = false;
	for(var j in imgs) {
		if(imgs[j].src==src) {
			exist = true;
			break;
		}
	}
	if (!exist) {
		var img = new Image();
		img.src = src;	
		imgs.push({
			"src" 	: src, 
			"width" : img.width, 
			"height": img.height, 
			"from" 	: location.host+location.pathname
		});
	}
}
*/

chrome.extension.sendMessage({"cmd" : "SHOW_IMAGES", "images" : imgs, "from" : location.href});