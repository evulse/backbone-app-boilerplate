BEHOLD, THE FRONTEND!
========================

Simple front-end app which talks with the express-api-boilerplate. Did I mention simple?

## Whatchu talkin'bout mister?

So uh, yeah. Here's the plan. The designs is better be sliced using [Compass](http://compass-style.org/) + [SASS](http://sass-lang.com/), or just plain old css. Then we will abuse [Grunt](http://gruntjs.com/) to run a simple [Connect](http://www.senchalabs.org/connect/) Server that will [Livereload](http://livereload.com/) our changes and the [Jasmine](http://pivotal.github.com/jasmine/) spec runner.

## That's a lot of javascripts..

Uh-oh. Don't get groggy the first time. I already put it inceptionally, so you'd drown. Keh-keh-keh. We'll use [Require.js](http://requirejs.org/) to organize the god-please-don't-let-it-get-messy [Backbone.js](http://backbonejs.org/) app. To get you excited, the BDD framework is up and running with [Jasmine](http://pivotal.github.com/jasmine/). Neat huh?

---

So this is how it started.
========================

Please read and use the `.editorconfig` file so we don't get tangled in different coding standard across platforms. Read about it [here](http://editorconfig.org/).

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

## Directories.

Directory structure.. for starters.

    EVULSE-BBB
      |--/ config                      MAIN CONFIG directory
      |    |-- app.build.js            r.js build configuration
      |    |-- compass-config.rb       Compass configuration
      |
      |--/ public                      PUBLIC directory
      |    |--/ assets                 CSS + Images + Webfonts…
      |    |--/ js
      |    |    |--/ app               the Backbone.js app
      |    |    |--/ libs              vendor-endorsed libraries
      |    |    |--/ test              Jasmine spec runner, etc.
      |    |    |-- app.js
      |    |    
      |    |-- index.html              the App index
      |
      |-- Gruntfile.js                 Grunt configuration
      |-- package.json                 node package info
      ..

.. and this is the Backbone app directory.

    /public/js/app
      |--/ collections
      |--/ config
      |    |-- DesktopInit.js          Destop Initializer
      |    |-- DesktepInit.min.js      .. minified
      |
      |--/ helpers
      |--/ models
      |--/ routers
      |--/ templates
      |--/ views
  
 