#!/bin/sh
version=`cat version.json | jq -r '.version'`
subversion=`cat version.json | jq -r '.subversion'`
pkgversion=`cat package.json | jq -r '.version'`
if [ ! $version = $pkgversion ]; then
  sed -ie "s/\"version\": .*/\"version\": \"$pkgversion\",/g" version.json
  sed -ie "s/\"subversion\": .*/\"subversion\": 0/g" version.json
else
  newsubversion=`expr $subversion + 1`
  sed -ie "s/\"subversion\": .*/\"subversion\": $newsubversion/g" version.json
fi