<template>
  <v-app>
    <Header />
    <v-content>
     ようこそjobcanへ！！
    </v-content>
    このページはログイン前のレイアウト「home.vue」が使用されています。
    <Footer />
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
