module.exports = function(grunt) {
    grunt.initConfig({

        jade: {
            compile: {
                options: {
                    client: false,
                    pretty: true
                },
                files: [ {
                  src: "*.jade",
                  dest: "build/templates/",
                  ext: "html",
                  cwd: "source/templates/"
                } ]
            }
        },
    });

    grunt.loadNpmTasks("grunt-contrib-jade");
};
