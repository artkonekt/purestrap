module.exports = function(grunt) {

    grunt.initConfig({
        compass: {
            dev: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'demo',
                    outputStyle: 'expanded',
                    noLineComments: false,
                    environment: 'development'
                }
            }
        },

        clean: {
            build: ['web/assets/**']
        },

        watch: {
            compass: {
                files: 'sass/**/*.sass',
                tasks: ['compass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask(
        'build',
        'Compiles sass sheets and copies the files to the demo directory.',
        ['clean', 'compass']
    );

};