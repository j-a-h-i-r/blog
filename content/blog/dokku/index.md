---
slug: "blog/my-first-post"
date: "2019-05-04"
title: "My first blog post"
---

I've recently discovered [dokku](https://dokku.com/). I was setting up some of my personal projects in a DigitalOcean droplet like a caveman and was looking for alternative. Dokku appeared in my search results like a blessing.

I followed the [getting started guide](https://dokku.com/docs/deployment/application-deployment/) and set up the demo application in my server easily. So I then moved to host one of my react projects in cloud.

I looked around to see if there is any ready-made solution supported by Dokku. But I could not find any solution specific to react. Dokku provides a [buildpack for deploying a static site](https://github.com/dokku/heroku-buildpack-nginx). It also supports building the static assets! While that is nice, it was difficult to deploy the react app along with the API.

I found [heroku-buildpack-static](https://github.com/heroku/heroku-buildpack-static) which is provided by Heroku. It is way more easily configurable and fit my use case perfectly.

### Setting up the stage

We actually need 2 buildpacks. First buildpack will build the react app and the second one will deploy the static files.

So, add a `.buildpacks` file and put the following content in the file

```
https://github.com/heroku/heroku-buildpack-nodejs.git
https://github.com/heroku/heroku-buildpack-static.git
```

`https://github.com/heroku/heroku-buildpack-nodejs.git` is the buildpack for working with NodeJS files. As the react app uses NodeJS, simply adding this buildpack will take care of building the application.

`https://github.com/heroku/heroku-buildpack-static.git` buildpack will take care of configuring the nginx and other stuffs after the app is built.

### Configuring the deployment

The cool thing about `heroku-buildpack-static` is that it supports [lots of different settings](https://github.com/heroku/heroku-buildpack-static#configuration). We just need to add a `static.json` file at the root directory of the app.

Here's a simple example,

```javascript{numberLines: true}
{
  "root": "build/",
  "proxies": {
    "/api/": {
      "origin": "https://example.com/api"
    }
  }
}
```

`root` specifies the root folder of the static files. React apps by default output the build files at the `build` directory. So this will configure the nginx to treat the `build` folder as the root.

The `proxies` option makes it easy to communicate with the API and avoid CORS. The example above will proxy all `<app-url>/api` calls to `https://example.com/api`. 

This makes it really easy to separately deploy the fronend and backend. 

What I would really like is to avoid specifying a public URL. My backend is also running in the same server. So, I would like to proxy my calls to the internal URL of the backend without routing it through a public URL.
