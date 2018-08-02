#!/bin/bash

# pull...
cd ~/projects/smartlift-node-monitor
git pull

# rebuild
npm install
typings install
./node_modules/.bin/electron-rebuild 
npm run build
npm run electron