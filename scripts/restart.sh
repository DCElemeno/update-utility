#!/bin/bash

# update the node-monitor
cd ~/projects/smartlift-node-monitor
git pull

# rebuild
npm install
typings install
./node_modules/.bin/electron-rebuild 
npm run build

# update the update-util
cd ~/projects/update-util
git pull

# update awesome wm
cd ~/.config/awesome
git pull

#actually restart
reboot