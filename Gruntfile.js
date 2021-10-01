'use strict';

module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        project: {
            app: 'nltk_theme',
            assets: '<%= project.app %>/static',
            css: [
                'scss/nltk_theme.scss'
            ]
        },

        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    '<%= project.assets %>/css/nltk_theme.css': '<%= project.css %>'
                }
            },
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    '<%= project.assets %>/css/nltk_theme.css': '<%= project.css %>'
                }
            }
        },

        shell: {
            build_docs: {
                command: 'python -m sphinx -Ea seonu seonu/_build/html'
            }
        },

        connect: {
            server: {
                options: {
                    port: 8000,
                    base: 'seonu/_build/html'
                }
            }
        },

        watch: {
            sass: {
                files: 'scss/{,*/}*.{scss,sass}',
                tasks: ['sass:dev', 'shell:build_docs']
            },
            html: {
                files: 'nltk_theme/{,*/}*.{html, py, conf}',
                tasks: ['shell:build_docs']
            }
        }
    });

    grunt.registerTask('default', ['sass:dev', 'shell:build_docs', 'connect', 'watch']);
    grunt.registerTask('dist', ['sass:dist']);
};
