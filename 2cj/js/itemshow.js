var items = new Array();
var count = 0;

/*function mergeImages(imgs) {
	for(var j in imgs) {
		var exist = false;
		for(var i in images) {
			if(imgs[j].src==images[i].src) {
				exist = true;
				break;
			}
		}
		if(!exist) {
			images.push(imgs[j]);
			showImage(imgs[j]);
		}
	}
}*/

/*
function showImage(img) {
	count++;
	$(document.body).append(
		"<div id=\"i"+count+"\" class=\"pic\">"
		+ "<a href=\""+img.src+"\" target=\"_blank\">"
		+ "<img src=\""+img.src+"\" title=\""+img.width+"×"+img.height+"\" />"
		+ "</a>"
		+"</div>");
}
*/

function showItem( itemArray ) {
	/*count++;
	$(document.body).append(
		"<div id=\"i"+count+"\" class=\"pic\">"
		+ "<a href=\""+img.src+"\" target=\"_blank\">"
		+ "<img src=\""+img.src+"\" title=\""+img.width+"×"+img.height+"\" />"
		+ "</a>"
		+"</div>");*/
    var i;
    console.log( itemArray.length );
    for (i=0; i<itemArray.length; i++){
        items.push( itemArray[i] );
        console.log( itemArray[i].title );
        console.log( itemArray[i].des );

        /*<div class="col-md-3">
            <h2>
                Heading
            </h2>
            <p>
                Donec id elit non mi porta gravida at eget metus.
            </p>
            <p>
                <a class="btn" href="#">View details »</a>
            </p>
        </div>*/
        /*
        <div id="i1" class="pic">
            <a href="./Pictures_files/TB1ys1sHVXXXXcrXVXXL_ZfHFXX-208-46.png" target="_blank">
            <img src="./Pictures_files/TB1ys1sHVXXXXcrXVXXL_ZfHFXX-208-46.png" title="0×0">
        </a>
        */
        console.log( itemArray[i].image );
        //$(document.getElementById('row')).append(
		$(document.body).append(
		"<div class=\"col-md-3\">"
		+ "<h2>" + itemArray[i].title + "</h2>"
		+ "<a href=\""+itemArray[i].image+"\" target=\"_blank\">"
		+ "<img src=\""+itemArray[i].image+"\" title=\""+"20"+"×"+"20"+"\" />"
		+ "</a>"
        + "<p>" + itemArray[i].des + "</p>"
		+ "<p>" + "<a class=\"btn\" href=\"#\">View details »</a>"+ "</p>"
        +"</div>");

        /*
        $(document.getElementById('row')).append(
		"<div id=\"i"+count+"\" class=\"pic\">"
		+ "<a href=\""+img.src+"\" target=\"_blank\">"
		+ "<img src=\""+img.src+"\" title=\""+img.width+"×"+img.height+"\" />"
		+ "</a>"
		+"</div>");
		*/
    }


}

function listener(request, sender, sendResponse) {
	if(request.cmd == "SHOW_ITEMS") {
		//mergeImages(request.itemArray);
	    showItem( request.items );

    }
}

//chrome.extension.onMessage.addListener(listener);
chrome.runtime.onMessage.addListener(listener);
