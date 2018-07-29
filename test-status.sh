#!/bin/bash

cd ~/projects/smartlift-node-monitor

UPSTREAM=${1:-'@{u}'} 
LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse "$UPSTREAM")
BASE=$(git merge-base @ "$UPSTREAM")

if [ $LOCAL = $REMOTE ]; then
    echo "Up-to-date"
elif [ $LOCAL = $BASE ]; then
    echo "Update(s) Pending"
elif [ $REMOTE = $BASE ]; then
    echo "incorrectly synced cache - contact system administrator"
else
    echo "Issue occurred - contact system administrator"
fi