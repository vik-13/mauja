module.exports = function() {
    return {
        sources: {
            index: 'src/index.html',
            scripts: 'src/app/**/*.js',
            stylesheets: [
                'src/stylesheets/**/*.css'
            ]
        },
        release: {
            index: 'release',
            scripts: 'release/js',
            stylesheets: 'release/css'
        }
    };
};