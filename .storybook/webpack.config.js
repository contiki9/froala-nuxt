const path = require('path')
const rootPath = path.resolve(__dirname, '../')


// Export a function. Accept the base config as the only param.
module.exports = async ({config, mode}) => {
    // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
    },{
        test: /\.pug$/,
        oneOf: [
            {
                resourceQuery: /^\?vue/,
                use: ['pug-plain-loader']
            },
            {
                use: ['raw-loader', 'pug-plain-loader']
            }
        ]
    });
    // Return the altered config
    config.resolve.alias = {
        '@': rootPath,
        '~': rootPath,
        'vue$': 'vue/dist/vue.esm.js'
    }
    return config;
};
