var pfindex = -1;

document.addEventListener('keydown', function(event) {
    if(pfindex > -1 && event.keyCode == 37) {
	pfindex--;
	pfindex = ((pfindex % files.length) + files.length) % files.length;
	settoasset(pfindex);
    }
    else if(pfindex > -1 && event.keyCode == 39) {
	pfindex = (pfindex + 1) % files.length;
	settoasset(pfindex);
    }
});

function setabout() {
	pfindex = -1;
	document.getElementById("content").innerHTML='<h2>About Me</h2><p>I&#39;m John Du, senior at Purdue University majoring in Computer Science with a focus in Software Engineering and Security. I like to think of myself as a creator. Code is just another way to create great things. It&#39;s why I make pixel art. It&#39;s why I develop games in my spare time. It&#39;s why I love doing what I do.</p>';
	setprofile("./assets/selfie.gif", "224", "224", "#");
}

function setportfolio() {
	pfindex = 0;
	files.sort(function() { return 0.5 - Math.random(); }); //good enough honestly
	var content = document.getElementById("content");
	content.innerHTML = '<h2>Pixel Art Portfolio<h2>';
	var first = './assets/pixelart/' + files[0];
	for (i = 0; i < files.length; i++) {
		var full = '"./assets/pixelart/' + files[i] + '"';
		content.innerHTML += '<a onclick=\'settoasset(' + i + ')\'><img src=' + full + ' /></a>';
	}
	settoasset(pfindex);
}

function settoasset(index) {
	pfindex = index;
	var path = './assets/pixelart/' + files[index];
	setprofile(path, "320", "288", path);
}

function setprofile(image, width, height, link) {
	var profile = document.getElementById("profile");
	profile.src = image;
	profile.width = width;
	profile.height = height;
	var profileLink = document.getElementById("profileLink");
	profileLink.href = link;
	profileLink.target = ((link === "#") ? "" : "_blank");
}

