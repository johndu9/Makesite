#!/bin/bash
echo "$1='" > ../$1.js
cat $1.txt | sed 's/^[^=]/<p>/' | sed 's/[^=]$/<\/p>/' | sed 's/^=====/<h5>/' | sed 's/=====$/<\/h5>/' | sed 's/^====/<h4>/' | sed 's/====$/<\/h4>/' | sed 's/^===/<h3>/' | sed 's/===$/<\/h3>/' | sed 's/^==/<h2>/' | sed 's/==$/<\/h2>/' | sed 's/^=/<h1>/' | sed 's/=$/<\/h1>/' | sed 's/'\''/\&#39;/g' >> ../$1.js
echo "';" >> ../$1.js 
tr '\n' ' ' < ../$1.js > a.js
echo "" >> a.js
mv a.js ../$1.js

