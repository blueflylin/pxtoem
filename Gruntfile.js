module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        loadPath: ['bower_components/foundation/scss'],
      },
      dist: {
        options: {
          style: 'compressed',
        },
        files: {
          'build/app.css': 'scss/app.scss',
          'build/style.css': 'scss/style.scss',
        },        
      },
    },

    concat: {
      options: {},

      dist: {
        src: ['build/app.css', 'build/style.css'],
        dest: 'css/pxtoem.css',
      },
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass'],
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('build', ['sass', 'concat']);
  grunt.registerTask('default', ['build','watch']);
}
