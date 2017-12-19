module.exports = {
  /*
   * Headers of the page
   */
  head: {
    titleTemplate: '%s | Awesome JS SSR Blog',
    // ...
    link: [
      // ...
      { 
        rel: 'stylesheet', 
        href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.min.css' 
      }
    ]
  },
  // router: {
  //   routes: [
  //   // ...
  //     {
  //       name: 'post-id',
  //       path: '/post/:id',
  //       component: 'pages/post/_id/index.vue'
  //     }
  //   ]
  // }
  // ...
}