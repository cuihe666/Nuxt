<!-- ./pages/list.vue -->
<template>
  <div class="main-content">
    <div class="container">
      <h2 class="title is-2">This is List page</h2>
      <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
      <br>
      <h4 class="title is-4">What we hope to achieve:</h4>
      <ul>
        <li>用来验证Nuxt的路由问题</li>
        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
        <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
        <li>Ut non enim metus.</li>
      </ul>
    </div>
    <mosts />
  </div>
  
</template>

<script>
import Mosts from '~/components/Most.vue'

export default {
  components: {
    Mosts
  },
  head: {
    title: 'List'
  }
}
</script>