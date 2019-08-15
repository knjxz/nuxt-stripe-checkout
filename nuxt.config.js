const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'Upcare', name: 'Upcare', content: 'O cuidado vai até você' },
      { name: 'p:domain_verify', content: '6e9a357858181aa19dd06469f4d2b1c0' },
      {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'upcare.online'
      },
      {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://upcare.online/'
      },
      {
          hid: 'og:title',
          property: 'og:title',
          content: 'Upcare'
      },
      {
          hid: 'og:description',
          property: 'og:description',
          content: 'Uma Rede de apoio que conecta você a serviços de profissionais da saúde e outras atividades que promovem o envelhecimento ativo e saudável.'
      },
      {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://res.cloudinary.com/upcare-online/image/upload/v1551273062/Imagens/192x192.png'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon2.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600'},
      { rel: 'stylesheet', type: 'text/css', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'}
    ],
    script: [
      { src: 'https://js.stripe.com/v3', type: 'text/javascript' },
      { src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js', type: 'text/javascript' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', type: 'text/javascript' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', type: 'text/javascript' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/stripe.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

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
