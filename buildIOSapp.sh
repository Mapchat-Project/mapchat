#!/bin/bash
cd mapchat
npm run build
cd ..
cordova build ios
cordova emulate ios
remotedebug_ios_webkit_adapter --port=9000