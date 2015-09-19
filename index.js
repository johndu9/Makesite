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

document.getElementById("header").innerHTML=header;

function setabout() {
	pfindex = -1;
	document.getElementById("content").innerHTML = about;
	setprofile(profilepath, "320", "288", "#");
}

function setportfolio() {
	pfindex = 0;
	files.sort(function() { return 0.5 - Math.random(); }); //good enough honestly
	var content = document.getElementById("content");
	content.innerHTML = portfolio;
	for (i = 0; i < files.length; i++) {
		content.innerHTML += '<a onclick=\'settoasset(' + i + ')\'><img src="' + pfpath + files[i] + '" /></a>';
	}
	settoasset(pfindex);
}

function settoasset(index) {
	pfindex = index;
	var path = pfpath + files[index];
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

