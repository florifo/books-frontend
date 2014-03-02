'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

/*global module:false*/
module.exports = function(grunt) {

  var config = {
    app: '.'
  }

  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

    
  // Project configuration.
  grunt.initConfig({
    config: config,
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    watch: {
        compass: {
            files: ['scss/{,*/}*.{scss,sass}'],
            tasks: ['compass:server']
        },
        livereload: {
            options: {
                livereload: LIVERELOAD_PORT
            },
            files: [
                '<%= config.app %>/*.html',
                'css/{,*/}*.css',
                // '<%= config.app %>/js/{,*/}*.js',
                '<%= config.app %>/aura_components/{,*/}*.js',
                '<%= config.app %>/aura_extensions/{,*/}*.js',
                '<%= config.app %>/aura_components/{,*/}*.hbs',
                '<%= config.app %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        }
    },
    connect: {
      options: {
          port: 9000,
          // change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost'
      },
      livereload: {
          options: {
              middleware: function (connect) {
                  return [
                      lrSnippet,
                      mountFolder(connect, config.app)
                  ];
              }
          }
      }
    },
    open: {
      server: {
          path: 'http://localhost:<%= connect.options.port %>'
      }
    },
    compass: {
        options: {
            // If you're using global Sass gems, require them here.
            // require: ['bootstrap-sass', 'font-awesome-sass'],
            require: ['bootstrap-sass', 'compass-flexbox'],
            sassDir: 'scss',
            cssDir: 'css',
            generatedImagesDir: 'img',
            imagesDir: 'img',
            // javascriptsDir: 'js',
            fontsDir: '/bower_components/bootstrap/',
            // importPath: 'js',
            httpImagesPath: '/img',
            httpGeneratedImagesPath: '/img',
            httpFontsPath: '/bower_components/bootstrap/',
            relativeAssets: false,
            noLineComments: false
        },
        server: {
            options: {
              debugInfo: false
            }
        }
    },
    concurrent: {
        compass: ['compass:server']
    }
  });

  // These plugins provide necessary tasks.
  // grunt.loadNpmTasks('grunt-contrib-compass');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-connect');
  // grunt.loadNpmTasks('grunt-concurrent');
  // grunt.loadNpmTasks("grunt-open");


  // grunt server --css=less
  // this will compile less instead of default compass.
  // var preprocessor = grunt.option('css') || 'compass';

  grunt.registerTask('server', function (target) {

    grunt.task.run([
        // 'clean:server',
        // 'concurrent:' + preprocessor,
        'concurrent:compass',
        'connect:livereload',
        'open',
        'watch'
    ]);
  });

};
