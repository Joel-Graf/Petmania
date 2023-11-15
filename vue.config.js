module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    // Adicione ou ajuste as configurações do Webpack usando chainWebpack
    // Exemplo: configurando uma regra para vue-loader
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        // Modifique as opções do vue-loader aqui, se necessário
        return options;
      });
  }
};
