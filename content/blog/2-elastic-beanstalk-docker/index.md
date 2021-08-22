---
slug: "elastic-beanstalk-docker"
date: "2020-12-25"
title: "Using docker with elastic beanstalk is not fun!"
tags: ["deployment", "aws"]
---

I have a fullstack application using the JS stack. It uses express for the server and Angular on the front end. This is sort of a pet project and I like to do some experiments with it. One of them is to enable automatic deployment on it. 

The server and client codes resided on their own repo. What I did for deployment is to generate the build artifacts using angular on my local machine. Then I manually copied them over to my server repo and served the static files from there. This is very manual process and I needed to automate it. 

I used elastic beanstalk for automatically deploying my application. For the automating process, I converted my project into a monorepo, so that I can build the code upon push to master. While I was at it, I thought why not use docker. 

I created a docker environment on elastic beanstalk. I setup my Dockerfile and docker-compose configuration. It worked well for the first few times. But after that it was all just a mess. The biggest problem was that the environment kept crashing every time I deployed changes. And during the crash, I could not access the logs. It took almost 30 minutes each time the eb environment crashed. This makes the debugging process extremely frustating. After 2 days of trying to make it work, I gave up.
