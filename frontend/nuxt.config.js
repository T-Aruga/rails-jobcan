
const config = {
  server: {
    port: 8000,
  },
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.BASE_URL	|| 'http://localhost:3000'
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'	,
  ],

  plugins: [
    'plugins/vuetify',
  ],

  generate: {
    dir: '../public'
  },

  env: {
    APP_NAME: process.env.npm_package_name
  },

  css: [
    '@/assets/css/main.scss'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  // auth: {
  //   redirect: {
  //     login: '/login',
  //     logout: '/login',
  //     callback: false,
  //     home: '/'
  //   },
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: '/api/v1/auth/sign_in', method: 'post', propertyName: false },
  //         logout: false,
  //         user: false
  //       }
  //     }
  //   }
  // },

  // router: {
  //   middleware: ['auth']
  // }
}

if (process.env.NODE_ENV === 'development') {
  config.buildModules.push('@nuxtjs/eslint-module')
  // config.axios = { baseURL: 'http:localhost:3000' }
  config.proxy = { '/api': 'http://localhost:3000' }
}

export default config
