module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            jquery: {
                files: {
                    'dist/js/jquery.min.js': ['bower_components/jquery/dist/jquery.min.js'],
                    'dist/js/jquery.js': ['bower_components/jquery/dist/jquery.js'],
                    'dist/js/agency.js': ['js/agency.js'],
                    'dist/js/cbpAnimatedHeader.js': ['js/cbpAnimatedHeader.js'],
                    'dist/js/classie.js': ['js/classie.js'],
                    'dist/js/contact_me.js': ['js/contact_me.js'],
                    'dist/js/jqBootstrapValidation.js': ['js/jqBootstrapValidation.js']
                }
            },
            bootstrap: {
                files: {
                    'dist/js/bootstrap.min.js': ['bower_components/bootstrap/dist/js/bootstrap.min.js'],
                    'dist/js/bootstrap.js': ['bower_components/bootstrap/dist/js/bootstrap.js'],
                    'dist/css/bootstrap.min.css': ['bower_components/bootstrap/dist/css/bootstrap.min.css'],
                    'dist/css/bootstrap.css': ['bower_components/bootstrap/dist/css/bootstrap.css'],
                    'dist/fonts/glyphicons-halflings-regular.eot': ['bower_components/bootstrap/fonts/glyphicons-halflings-regular.eot'],
                    'dist/fonts/glyphicons-halflings-regular.svg': ['bower_components/bootstrap/fonts/glyphicons-halflings-regular.svg'],
                    'dist/fonts/glyphicons-halflings-regular.ttf': ['bower_components/bootstrap/fonts/glyphicons-halflings-regular.ttf'],
                    'dist/fonts/glyphicons-halflings-regular.woff': ['bower_components/bootstrap/fonts/glyphicons-halflings-regular.woff'],
                }
            },
        },
        copy: {
            main: {
                src: ['*.html', 'mail/**'],
                dest: 'dist/',
            },
        },
        less: {
            development: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "dist/css/agency.css": "less/agency.less"
                }
            },
            production: {
                options: {
                    paths: ["css"],
                    cleancss: true
                },
                files: {
                    "dist/css/agency.css": "less/agency.less"
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/img/'
                }]
            }
        }
    });

    // Load the plugin that provides the "copy" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'copy', 'less', 'imagemin']);

};