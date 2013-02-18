module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['Gruntfile.js', 'tasks/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/**/*.js'
      ]
    },
    nodeunit: {
      tests: ['test/*_test.js']
    },
    growl : {
      myMessage : {
        message : "Some message",
        title : "Notification Title",
        image : __dirname + "/foo.png"
      }
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', 'lint test');

  // Test task.
  grunt.registerTask('test', ['nodeunit']);

};
