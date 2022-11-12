var video;

//step 1 initialize the video element and turn off autoplay and turn off looping
window.addEventListener("load", function() {
	
	console.log("Good job opening the window");
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
	console.log("autoplay is false!", video.autoplay);
	console.log("loop is false!", video.loop);

});

//step 2 play vid and update volume info
document.getElementById("play").addEventListener("click", function() {
	
	console.log("playing video!");
	video.play();
	var vol = document.querySelector("#slider").value; 
	document.querySelector("#volume").innerHTML =  vol + "%";
});

//step 3 pause vid
document.getElementById("pause").addEventListener("click", function() {
	console.log("paused vid!");
	video.pause();
});

//step 4 slow down vid
document.getElementById("slower").addEventListener("click",function() {

	console.log("start slowing down vid");
	// var vidspeed = video.playbackRate;
	video.playbackRate *= 0.9;
	// vidspeed *= 0.9;
	console.log("new speed: " + video.playbackRate);
});


//step 5 speed up vid
document.getElementById("faster").addEventListener("click", function() {

	console.log("start speeding up vid");
	video.playbackRate *= 1.1;
	console.log("new speed: " + video.playbackRate);
});

//step 6 
document.getElementById("skip").addEventListener("click", function() {

	console.log("running skip function!");
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;

	} else {
		video.currentTime += 10;
	}
	//log current location of video
	console.log("new current vid time: " + video.currentTime);

});

//step 7 mute and umnute -- update text on button:
document.getElementById("mute").addEventListener("click", function(){

	console.log("perform mute/unmute function!");

	if (video.muted) {
		document.getElementById("mute").innerHTML = "Mute";
		console.log("unmuted video");
		video.muted = false;

	} else {
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("muted video")
		video.muted = true;

	}

});

//step 8 change vol slider and update info
document.getElementById("slider").addEventListener("click", function() {

	console.log("performing video slider function!");
	console.log("start vol", video.volume);

	video.volume = this.value / 100;
	document.querySelector('#volume').innerHTML = 100 * video.volume + "%";

	console.log("new vol is: " + video.volume);

});

//step 9 styled
document.getElementById("vintage").addEventListener("click", function() {
	console.log("vintage styling")
	video.classList.add("oldSchool");
});

//step 10 remove old school
document.getElementById("orig").addEventListener("click", function(){
	console.log("remove styling")
	video.classList.remove("oldSchool");
});