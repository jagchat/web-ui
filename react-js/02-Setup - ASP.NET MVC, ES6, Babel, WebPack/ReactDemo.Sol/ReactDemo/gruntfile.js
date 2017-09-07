module.exports = function (grunt) {
    'use strict';

    //require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        babel: {
            options: {
                sourceMap: true,
                plugins: ['transform-react-jsx'],
                presets: ['es2015', 'react']
            },
            jsxdev: {
                files: [
                    {
                        expand: true, // Recursive
                        cwd: "Scripts/app", // The startup directory
                        src: ["**/*.jsx"], // Source files
                        dest: "Scripts/app", // Destination
                        ext: ".js" // File extension 
                    }
                ]
            },
            jsxdist: {
                options: {
                    compact: true
                },
                files: [
                    {
                        expand: true, // Recursive
                        cwd: "Scripts/app", // The startup directory
                        src: ["**/*.jsx"], // Source files
                        dest: "Scripts/app", // Destination
                        ext: ".js" // File extension 
                    }
                ]
            }
        },

        watch: {
            jsx: {
                files: "Scripts/app/**/*.jsx",
                tasks: ["babel:jsxdev"],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.registerTask('dev', ['babel:jsxdev']);
    grunt.registerTask('dist', ['babel:jsxdist']);
    grunt.registerTask('dev-watch', ['watch:jsx']);
};