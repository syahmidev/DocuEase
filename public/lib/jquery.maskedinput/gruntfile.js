
"use strict";

module.exports = function( grunt ) {
  grunt.initConfig({
    // TODO: change to read component.json
    pkg: require('./package.json'),

    uglify: {
      options: {
        banner: '\n'
      },

      dev: {
        options: {
          beautify: true,
          mangle: false
        },

        files: {
          'dist/jquery.maskedinput.js': ['src/jquery.maskedinput.js']
        }
      },

      min: {
        files: {
          'dist/jquery.maskedinput.min.js': ['src/jquery.maskedinput.js']
        }
      }
    },

    jasmine: {
      full: {
        src: "src*.js",
        options: {
          specs: "spec/*[S|s]pec.js",
          vendor: [
            "spec/lib/matchers.js",
            "spec/lib/jasmine-species/jasmine-grammar.js",
            "spec/lib/setup.js",
            "lib/jquery-1.9.0.min.js",
            "spec/lib/jquery.keymasher.js"
          ]
        }
      }
    },
    nugetpack: {
        dist: {
            src: 'jquery.maskedinput.nuspec',
            dest: 'dist/'
        }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jasmine");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-nuget');

  grunt.registerTask('test', ['jasmine']);
  grunt.registerTask('pack', ['default','nugetpack']);
  grunt.registerTask('default', ['test', 'uglify']);
};
