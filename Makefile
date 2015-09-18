#MAKE SURE THAT THIS IS WHAT YOU WANT
all: rebuild index.html
	sudo rm -r /var/www
	sudo mkdir /var/www
	sudo cp -r * /var/www

rebuild:
	echo "files=[" > files.js
	ls assets/pixelart | grep .gif | sed 's/^/"/' | sed 's/$$/",/' >> files.js
	echo "];" >> files.js
