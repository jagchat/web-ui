module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');	
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify:{
			t1:{
				files:{
					'dest/all.min.js': ['src/app.js', 'src/one.js', 'src/t/two.js']
				}
			}
		}
	});

	
};