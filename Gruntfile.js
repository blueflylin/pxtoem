module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        loadPath: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'build/app.css': 'src/scss/app.scss',
          'build/style.css': 'src/scss/style.scss'
        }
      }
    },

    concat: {
      options: {},

      dist: {
        src: ['build/app.css', 'build/style.css'],
        dest: 'css/pxtoem.css'
      }
    },

    uglify: {
      options: {
        mangle: false
      },

      px_to_em: {
        files: {
          'js/pxtoem.js': ['bower_components/angular/angular.min.js', 'src/js/app.js', 'bower_components/foundation/js/vendor/fastclick.js']
        }
      },

      modernizr: {
        files: {
          'js/modernizr.js': ['bower_components/modernizr/modernizr.js']
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'src/scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['sass', 'concat', 'uglify']);
  grunt.registerTask('default', ['build']);
};
