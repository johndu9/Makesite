#MAKE SURE THAT THIS IS WHAT YOU WANT
all: rebuild ../index.html
	sudo rsync -a --delete .. /var/www/ --exclude backend

rebuild: todata cleanminor

todata: files portfolio pfpath profilepath about header
	echo "" > ../data.js
	cat ../files.js >> ../data.js
	cat ../pfpath.js >> ../data.js
	cat ../profilepath.js >> ../data.js
	cat ../portfolio.js >> ../data.js
	cat ../about.js >> ../data.js
	cat ../header.js >> ../data.js

files: pfpath.txt
	echo "files=[" > ../files.js
	ls ../$$(cat pfpath.txt) | sed 's/^/"/' | sed 's/$$/",/' >> ../files.js
	echo "];" >> ../files.js

pfpath: pfpath.txt
	echo "pfpath='$$(cat pfpath.txt)';" > ../pfpath.js

profilepath: profilepath.txt
	echo "profilepath='$$(cat profilepath.txt)';" > ../profilepath.js

portfolio: portfolio.txt
	bash tojs.sh portfolio

about: about.txt
	bash tojs.sh about

header: header.txt
	bash tojs.sh header

cleanminor:
	rm ../files.js
	rm ../pfpath.js	
	rm ../profilepath.js
	rm ../portfolio.js
	rm ../about.js
	rm ../header.js

clean: cleanminor
	rm ../data.js

