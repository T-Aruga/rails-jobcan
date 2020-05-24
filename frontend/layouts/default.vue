<template>
  <v-app>
    <div :is="currentHeader" />
    <nuxt />
  </v-app>
</template>

<script>
import Header from '~/components/shared/header.vue'
import loginHeader from '~/components/shared/loginHeader.vue'

export default {
  components: {
    Header,
    loginHeader
  },
  computed: {
    currentHeader () {
      return this.$store.state.loggedIn ? 'loginHeader' : 'Header'
    }
  }
}
</script>
