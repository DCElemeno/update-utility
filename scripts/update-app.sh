#!/bin/bash

# pull...
cd ~/projects/smartlift-node-monitor
git pull

#close app
electronApp="ps ax | grep 'electron app ws:' | grep node_modules | awk '{ print $1 }'"
kill $electronApp

# rebuild
npm install
typings install
./node_modules/.bin/electron-rebuild 
npm run build
npm run electron
