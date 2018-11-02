module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            browserify: {
                files: ['scripts/**/*.jsx'],
                tasks: ['browserify']
            }
        },

        browserify: {
            dev: {
                options: {
                    transform: [['babelify', { presets: ['es2015', 'react'] }]],
                    browserifyOptions: {
                        debug: true
                    }
                },
                src: ['scripts/**/*.jsx'],
                dest: 'build/app.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('default', ['browserify']);

};