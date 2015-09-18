function setabout() {
	document.getElementById("content").innerHTML='<h2>About Me</h2><p>I&#39;m John Du, senior at Purdue University majoring in Computer Science with a focus in Software Engineering and Security. I like to think of myself as a creator. Code is just another way to create great things. It&#39;s why I make pixel art. It&#39;s why I develop games in my spare time. It&#39;s why I love doing what I do.</p><p>Check out my pixel art portfolio! I&#39;m always working to improve my skills, but I do take commissions for pixel art. Email me to start.</p>';
	setprofile("./assets/selfie.gif", "224", "224");
}

function setportfolio() {
	files.sort(function() { return 0.5 - Math.random(); }); //good enough honestly
	var content = document.getElementById("content");
	content.innerHTML = '<h2>Pixel Art Portfolio<h2>';
	for (i = 0; i < files.length; i++) {
		var full = '"./assets/pixelart/' + files[i] + '"';
		content.innerHTML += '<a onclick=\'setprofile(' + full + ', "320", "288")\'><img src=' + full + ' /></a>';
	}
}
function setprofile(target, width, height) {
	var profile = document.getElementById("profile");
	profile.src = target;
	profile.width = width;
	profile.height = height;
}

