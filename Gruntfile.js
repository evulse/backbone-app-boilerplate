var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var folderMount = function folderMount(connect, point) {
  return connect.static(path.resolve(point));
};
var modRewrite = require('connect-modrewrite');
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    compass: {
      dist: {
        options: {
          config: "config/compass-config.rb",
          environment: "production"
        }
      },
      dev: {
        options: {
          config: "config/compass-config.rb"
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: "./public",
          middleware: function(connect, options) {
            return [
              modRewrite([
                "!^(.*).(html|js|coffee|css|sass|scss|png|jpg|gif|ico|svg|eot|ttf|woff|otf) /index.html"
              ]),
              connect.static(options.base)
            ];
          }
        }
      },
      livereload: {
        options: {
          port: 9001,
          middleware: function(connect, options) {
            return [lrSnippet, folderMount(connect, options.base)];
          }
        }
      }
    },
    // Configuration to be run (and then tested)
    regarde: {
      "html + js": {
        files: [
          "./public/js/**/*.js",
          "./public/**/*.css",
          "./public/**/*.html"
        ],
        tasks: ["livereload"]
      },
      scss: {
        files: "./public/assets/sass/*",
        tasks: ["compass"]
      }
    }
  });
  grunt.loadNpmTasks("grunt-contrib-livereload");
  grunt.loadNpmTasks("grunt-contrib-compass");
  grunt.loadNpmTasks("grunt-regarde");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.registerTask("default", ["livereload-start", "compass", "connect", "regarde"]);
};