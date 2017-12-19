<!-- ./components/Posts.vue -->
<template>
    <section class="main-content">
        <div class="container">
            <h1 class="title has-text-centered">
                Recent Posts.
            </h1>
            <div class="columns is-multiline">
                <div class="column is-half" v-for="post in posts">
                    <nuxt-link :to="`/post/${post.id}`" class="card-footer-item">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    {{ post.title }}
                                </p>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                        {{ post.summary }}
                                    <br>
                                    <small>
                                          by <strong>{{ post.author}}</strong> 
                                         \\ {{ post.published }}
                                    </small>
                                </div>
                            </div>
                            <footer class="card-footer">
                                  Read More            
                            </footer>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  import posts from '~/posts.json'

  export default {
    name: 'posts',
    data () {
      return { posts }
    }
  }
</script>
<style>
  .card-footer{
      display: block;
      text-align: center;
  }
</style>