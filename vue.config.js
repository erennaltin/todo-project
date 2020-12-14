const path = require('path')

module.exports = {
    chainWebpack: (config) => {
      const svgRule = config.module.rule('svg');
      const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
      types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  
      svgRule.uses.clear();
  
      svgRule
        .use('vue-loader')
        .loader('vue-loader-v16') // or `vue-loader-v16` if you are using a preview support of Vue 3 in Vue CLI
        .end()
        .use('vue-svg-loader')
        .loader('vue-svg-loader');
        
    },
  };

  function addStyleResource (rule) {
    rule.use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [
          path.resolve(__dirname, './src/styles/variables.less'),
          path.resolve(__dirname, './src/styles/main.less')
        ],
      })
  }