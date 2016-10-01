//var b = chrome.extension.getBackgroundPage();

function getConfig(name) {
	return localStorage[name];
}

function setConfig(name, value) {
	localStorage[name] = value;
}

//console.log ( document.querySelectorAll("li.item-info-wrapper.item-idle.clearfix") );
var item20 = document.querySelectorAll("li.item-info-wrapper.item-idle.clearfix");
var item,
    i,
    itemArray = new Array();

for (i=0; i<item20.length; i++){

    var one = item20[i];
    console.log( one );
    //title
    console.log( one.querySelector('h4.item-title') );
    console.log( one.querySelector('h4.item-title').innerText );
    title = one.querySelector('h4.item-title').innerText;
    //price
    console.log( one.querySelector('.item-price.price-block') );
    console.log( one.querySelector('h4.item-title').innerText );
    price = one.querySelector('h4.item-title').innerText;
    //image
    console.log( one.querySelector('.item-pic') );
    console.log( one.querySelector('.item-pic').getElementsByTagName('img')[0].getAttribute('src') );
    image = "http:"+one.querySelector('.item-pic').getElementsByTagName('img')[0].getAttribute('src');
    //description
    console.log( one.querySelector('.item-description') );
    console.log( one.querySelector('.item-description').innerText );
    des = one.querySelector('.item-description').innerText;
    //publish
    console.log( one.querySelector('.item-pub-time') );
    console.log( one.querySelector('.item-pub-time').innerText );
    pubTime = one.querySelector('.item-pub-time').innerText;
    //sell-nick
    console.log( one.querySelector('.seller-nick') );
    console.log( one.querySelector('.seller-nick').innerText );
    nick = one.querySelector('.seller-nick').innerText;
    //seller-location
    console.log( one.querySelector('.seller-location') );
    console.log( one.querySelector('.seller-location').innerText );
    loc = one.querySelector('.seller-location').innerText;

    item = {
        'title': title,
        'price': price,
        'image': image,
        'des' : des,
        'pubTime' : pubTime,
        'nick' : nick,
        'location' : loc
    };

    console.log( item );
    itemArray.push( item );
    console.log( JSON.stringify(item) );
    //var itemTmp =

}

/*
var imgs = new Array();
for(var i=0; i<document.images.length; i++){
	var src = document.images[i].src;
	var exist = false;
	for(var j in imgs) {
		setConfig(j, imgs[j].src);
        if(imgs[j].src==src) {
			exist = true;
			break;
		}
	}
	if (!exist) {
		var img = new Image();
		img.src = src;

        //console.log( src );
		imgs.push({
			"src" 	: src, 
			"width" : img.width, 
			"height": img.height, 
			"from" 	: location.host+location.pathname
		});
	}
}
*/

alert( "hello" );
chrome.runtime.sendMessage({"cmd" : "SHOW_ITEMS", "items" : itemArray, "title" : document.title});