<template>
  <v-app>
    <my-header />
    このページはログイン前のレイアウト「home.vue」が使用されています。
    <nuxt-link to="/login">
      ログインする
    </nuxt-link>
    <my-footer />
  </v-app>
</template>

<script>
import Header from '~/components/shared/header.vue'
import Footer from '~/components/shared/footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
