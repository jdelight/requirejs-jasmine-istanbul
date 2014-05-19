var fs = require('fs'),
    exec = require('child_process').exec;
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: '.',
                    keepalive: false,
                    middleware: function(connect, options, middlewares) {
                        // inject a custom middleware into the array of default middlewares
                        middlewares.push(function(req, res, next) {
                            if (req.url !== '/cov') return next();
                            req.on('data', function(data) {
                                var json = data.toString();

                                function generateCov() {
                                    fs.writeFile("./cov/coverage.json", json, function(err) {
                                        if (err) {
                                            console.log(err);
                                        } else {
                                            console.log("Created coverage.json");
                                            exec('istanbul report --root ./cov/ --dir ./report/ html', function(err, stdout, stderr) {
                                                if (stderr) {
                                                    console.log('stderr: ' + stderr);
                                                }
                                                if (stdout) {
                                                    console.log('stdout: ' + stdout);
                                                }
                                                if (err !== null) {
                                                    console.log('exec error: ' + error);
                                                }
                                            });
                                        }
                                    });

                                }
                                fs.exists('cov', function(covDirExists) {
                                    if (covDirExists) {
                                        generateCov()
                                    } else {
                                        fs.mkdir('cov', function(err) {
                                            generateCov();
                                        });
                                    }
                                });

                            });
                            res.end('Creating coverage report!');
                        });

                        return middlewares;
                    },
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/*.js'],
                tasks: ['instrument'],
                options: {
                    spawn: false,
                },
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('instrument', function() {

        console.log('instrumenting files...');
        exec('istanbul instrument src -o src-cov', function(err, stdout, stderr) {
            if (stderr) {
                console.log('stderr: ' + stderr);
            }
            if (stdout) {
                console.log('stdout: ' + stdout);
            }
            if (err !== null) {
                console.log('exec error: ' + error);
            }
        });

    });

    grunt.registerTask('default', ['connect', 'watch']);

};