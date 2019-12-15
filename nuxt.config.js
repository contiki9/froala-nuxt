import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/images/favicon.png' }
    ]
  },
  css: [
    // プロジェクト内の SASS ファイル
    { src: '@/assets/scss/style', lang: 'scss' },
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */


  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/FrolaDesignBlock.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    ['bootstrap-vue/nuxt']
  ],
  styleResources: {
    sass: [
      '~/assets/scss/config/variable.scss',
      '~/assets/scss/config/mixin.scss',
      '~/assets/scss/config/extend.scss',
    ],
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
