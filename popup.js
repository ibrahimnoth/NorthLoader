const popup = document.getElementById("popup");

function openVideo(url){

document.getElementById("videoFrame").src=url;

popup.style.display="flex";

}

function closeVideo(){

popup.style.display="none";

document.getElementById("videoFrame").src="";

}

window.onclick=function(e){

if(e.target===popup){

closeVideo();

}

}
