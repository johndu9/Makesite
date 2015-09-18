#MAKE SURE THAT THIS IS WHAT YOU WANT
all: index.html
	sudo rm -r /var/www
	sudo mkdir /var/www
	sudo cp -r * /var/www
