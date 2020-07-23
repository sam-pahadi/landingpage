var dateVal = new Date();
//set date 2 days back
dateVal.setDate(dateVal.getDate() - 2);
var month = String(dateVal.getMonth() + 1);
var day = String(dateVal.getDate());
var year = String(dateVal.getFullYear());
var monthShort = dateVal.toDateString().substring(4, 7);
if (month.length < 2) month = '0' + month;
if (day.length < 2) day = '0' + day;
//format for mobile
document.getElementById("pbDate").innerHTML = day + "/" + month + "/" + year;
//format for desktop
document.getElementById("pbDateDesktop").innerHTML = day + " " + monthShort + ", " + year;

//capture images for lazy loading
function setDataLazy() {
	var lazy = [];
	var imgList = document.getElementsByTagName('img');
	for (var i = 0; i < imgList.length; i++) {
		if (imgList[i].getAttribute('data-lazy')) {
			lazy.push(imgList[i]);
		}
	}
	return lazy;
}

//replace placeholder image to actual image
function lazyDataLoad() {
	var lazy = setDataLazy();
	for (var i = 0; i < lazy.length; i++) {
        if(isDataInViewport(lazy[i])){
			if (lazy[i].getAttribute('data-src')) {
				lazy[i].src = lazy[i].getAttribute('data-src');
				lazy[i].removeAttribute('data-src');
				lazy[i].removeAttribute('data-lazy');
			}
		}
	}
}

//on scroll
function lazyDataScroll(){
    var lazy=setDataLazy();
    for(var i=0; i<lazy.length; i++){
            isDataInViewport(lazy[i])
            {
            if (lazy[i].getAttribute('data-src')){
                lazy[i].src = lazy[i].getAttribute('data-src');
                lazy[i].removeAttribute('data-src');
                lazy[i].removeAttribute('data-lazy');
            }
        }
    }
}

//check if image is in the viewport
function isDataInViewport(el) {
	var rect = el.getBoundingClientRect();

	return (
		rect.bottom >= 0 &&
		rect.right >= 0 &&
		rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.left <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

//load lazy loading functionality
window.addEventListener("load", lazyDataLoad);
window.addEventListener("scroll", lazyDataScroll);