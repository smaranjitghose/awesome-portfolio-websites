const sass = require('node-sass');

/*globals module */
module.exports = function (grunt) {

	var banner = '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
		'<%= grunt.template.today("yyyy-mm-dd") %> */' + '\n';

	// Project configuration.
	grunt.initConfig({
		pkg: require('./package'),

		concat: {
			options: {
				banner: banner
			},
			build: {
				src: ['partials/*.scss'],
				dest: 'mixins.scss',
			}
		},

		sass: {
			css: {
				options: {
					implementation: sass,
					unixNewlines: true,
					style: 'expanded',
					banner: banner
				},
				files: {
					'test/css/main.css': 'test/scss/main.scss'
				}
			}
		},
		sassdoc: {
			default: {
				src: 'mixins.scss',
				options: {
					dest: 'doc',
					basePath: 'https://github.com/drublic/Sass-Mixins/blob/master',
				},
			},
		},
	});

	// Load some stuff
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-sassdoc');

	// Default task
	grunt.registerTask('default', ['concat', 'sass']);
	grunt.registerTask('doc', ['concat', 'sassdoc']);

};
