module.exports = function (grunt) {


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    app: {},

    auto_install: {
      local: {}
    },

    gitadd: {
      task: {
        options: {
          force: true
        },
        files: {
          src: ['*.scss']
        }
      }
    },

    bump: {
      options: {
        files: ["bower.json"],
        updateConfigs: [],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['-a'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: 'origin',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
        globalReplace: false,
        prereleaseName: false,
        regExp: false
      }
    }

  });

  grunt.loadNpmTasks('grunt-auto-install');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-git');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['auto_install']);
  grunt.registerTask('push', ['gitadd', 'bump']);
};