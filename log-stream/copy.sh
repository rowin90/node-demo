#!/bin/sh
cd /Users/jerome/work/2019/koa2-movie/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "">access.log