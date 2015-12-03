module.exports = function( grunt ) {
 
  grunt.initConfig({
    // Tasks
    concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['assets/js/libs/jquery/dist/jquery.min.js' , 'assets/js/libs/scrolling/scrolling.js'],
      dest: 'assets/js/libs.js',
      },
    },//concat
    jshint: {
      all: ['assets/js/main.js']
    },//jshint    
    sass : {
      dist : {
        options : { style : 'nested' },
        files : {
          'assets/css/style.css' : 'assets/css/_sass/style.scss'
        }
      }
    }, // sass
    watch : {
      dist : {
        files : [
          'assets/js/main.js',
          'assets/css/_sass/**/*'
        ],
          tasks : [ 'concat', 'sass' , 'jshint']
      }
    } // watch
  });
	// Plugins do Grunt
	grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

	// Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'concat' ] );
	grunt.registerTask( 'w', [ 'watch' ] );
};