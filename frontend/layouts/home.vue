<template>
  <v-app>
    <Header />
    <v-container fluid fill-height>
      <v-content>
       ようこそjobcanへ！！
      </v-content>
    </v-container>
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
