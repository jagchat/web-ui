module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify'); 
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

        uglify:{
            t1:{
                files:{
                    'dest/all.min.js': ['src/**/*.js']
                }
            }
        },

        watch: {
            w1: {
                files: ['src/**/*.js'],
                tasks: ['uglify:t1']
            }
        }

	});	
};