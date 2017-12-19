<!-- ./components/Most.vue -->
<template>
  <section class="main-content">
    <div class="container">
      <h1 class="title has-text-centered">
        Recent Mosts.
      </h1>
      <div class="columns is-multiline">
        <div class="column is-half" v-for="most in mosts">
          <div class="card">
           <header class="card-header">
            <p class="card-header-title">
              {{ most.title }}
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              {{ most.summary }}
              <br>
              <small>
                by <strong>{{ most.author}}</strong> 
                \\ {{ most.published }}
              </small>
            </div>
          </div>
          <footer class="card-footer">
            <nuxt-link :to="`/most/${most.id}`" 
              class="card-footer-item">
              Read More
            </nuxt-link>
          </footer>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
  import mosts from '~/posts.json'

  export default {
    name: 'mosts',
    data () {
      return { mosts }
    }
  }
</script>