# Middleman + Netlify CMS Starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/efe7185d-26d2-444b-b9e0-00b8677eab59/deploy-status)](https://app.netlify.com/sites/eager-sammet-16499e/deploys)

This repo contains an **[example website](https://middleman-netlify-cms.netlify.com/)** that is built with [Middleman](https://www.middlemanapp.com/) and [Netlify CMS](https://www.netlifycms.org).

*Designed and developed by [Tom Rutgers](https://www.tomrutgers.nl/)*

*If you want to use the external asset pipeline with ES6, Webpack & Babel have a look at [this repository](https://github.com/RobertAudi/middleman-starter-netlify-cms).*

## About the architecture

**Middleman** is a static site generator using all the shortcuts and tools in modern web development. Check out [middlemanapp.com](http://middlemanapp.com/) for detailed tutorials, including a [getting started guide](http://middlemanapp.com/basics/getting-started/).

**Netlify CMS** is a CMS for static site generators. Give non-technical users a simple way to edit and add content to any site built with a static site generator.

## Getting Started

To access the CMS, you’ll need to set up [Netlify identity](https://www.netlify.com/docs/identity/) service to authorize users to log in to the CMS.

### Make it work on your machine

## Using docker

```console
$ docker-compose build
$ docker-compose run --service-ports web middleman server
```

## Without docker
Be sure to check out the [middleman installation guide](https://middlemanapp.com/basics/install/)

```console
$ git clone https://github.com/RobertAudi/middleman-starter-netlify-cms
$ cd middleman-starter-netlify-cms
$ bundle install
$ middleman server
```

### Setting up the CMS

Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

### Trouble?

[![Gitter](https://badges.gitter.im/netlify/netlify.svg)](https://gitter.im/netlify/NetlifyCMS)
