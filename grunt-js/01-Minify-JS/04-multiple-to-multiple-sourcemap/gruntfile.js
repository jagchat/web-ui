module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');	

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify:{
			t1:{
				options : {
        			sourceMap : true,
      			},
				files: [{
					cwd: 'src/',
               		src: '**/*.js',  
               		dest: 'dest/',    
               		expand: true,    
               		flatten: false,
               		ext: '.min.js'
           		}]
			}
		}
	});	
};