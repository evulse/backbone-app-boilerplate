BEHOLD, THE FRONTEND!
===

Simple front-end app which talks with the express-api-boilerplate. Did I mention simple?

### Whatchu talkin'bout mister?

So uh, yeah. Here's the plan. The designs is better be sliced using [Compass](http://compass-style.org/) + [SASS](http://sass-lang.com/), or just plain old css. Then we will abuse [Grunt](http://gruntjs.com/) to run a simple [Connect](http://www.senchalabs.org/connect/) Server that will [Livereload](http://livereload.com/) our changes and the [Jasmine](http://pivotal.github.com/jasmine/) spec runner.

### That's a lot of javascripts..

Uh-oh. Don't get groggy the first time. I already put it inceptionally, so you'd drown. Keh-keh-keh. We'll use [Require.js](http://requirejs.org/) to organize the god-please-don't-let-it-get-messy [Backbone.js](http://backbonejs.org/) app. To get you excited, the BDD framework is up and running with [Jasmine](http://pivotal.github.com/jasmine/). Neat huh?

### So this is how it started.

First of all, please read and use the `.editorconfig` file so we don't get tangled in different coding standard across platforms. Read about it [here](http://editorconfig.org/).

---

# Requirements

To start working, first make sure you've got Node.js + npm, SASS + Compass, and the grunt-cli.

* Go to [Node.js](http://nodejs.org/) website about how to get `node` and `npm` up and running.
* [Compass](http://compass-style.org/) and [SASS](http://sass-lang.com/) is a ruby gem, so you can simply `gem install compass` (probably with `sudo`).
* [Grunt.js](http://gruntjs.com/getting-started) command line interface can be installed with `npm install -g grunt-cli`.

Make sure you have all of them installed by typing these on your command line:

    $ node -v
    ~ v0.10.1                      // node + npm installed
    $ compass -v
    ~ Compass 0.12.2 (Alnilam)     // compass + sass installed
    $ grunt -- version
    ~ grunt-cli v0.1.6             // grunt CLI installed
    ~ grunt v0.4.1

If everything goes well, lets just start coding right away!

## Directories. Explained. Maybe.

Directory structure.. for starters.

    PROJECT_DIRECTORY
      |--/ config . . . . . . . . . .  MAIN CONFIG directory
      |    |-- app.build.js . . . . .  r.js build config
      |    |-- compass-config.rb  . .  Compass config
      |
      |--/ public . . . . . . . . . .  PUBLIC directory
      |    |--/ assets  . . . . . . .  static assets
      |    |--/ js
      |    |    |--/ app  . . . . . .  the Backbone.js app
      |    |    |--/ libs . . . . . .  vendor-endorsed libs
      |    |    |--/ test . . . . . .  Jasmine specs + runner
      |    |    |-- app.js  . . . . .  conditional loader
      |    |    
      |    |-- index.html . . . . . .  the App index
      |
      |-- Gruntfile.js  . . . . . . .  Grunt configuration
      |-- package.json  . . . . . . .  node package info
      ..

.. and this is the Backbone app directory.

    /public/js/app . . . . . . . . . . APP directory
      |--/ config
      |    |-- DesktopInit.js . . . .  Destop Initializer
      |    |-- DesktepInit.min.js . .  Initializer, minified
      |
      |--/ helpers  . . . . . . . . .  Helper functions
      |
      |--/ collections                 Everything else is             
      |--/ models                      Backbone.
      |--/ routers
      |--/ templates
      |--/ views
  
.. and that's it!

## Let's get started!

First, we need to get some packages to make our life easier.

    $ cd PROJECT_DIRECTORY            // go to the main directory
    $ npm install --dev               // install packages
    ~ .. lots of codes going on here
    
The `npm install --dev` will install needed `devDependencies` to your directory. This will create new directory called `node_modules`.

To start up a server for our app, simply run grunt:

    $  grunt

This will automatically start a server on **port:9000**, so you can browse to [http://localhost:9000](http://localhost:9000) and see the app up and running! Grunt will start the server, watching for changes, and run the livereload whenever it has to!