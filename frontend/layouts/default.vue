<template>
  <v-app>
    <login-header />
    <nuxt />
  </v-app>
</template>

<script>
import loginHeader from '~/components/shared/loginHeader.vue'

export default {
  components: {
    loginHeader
  }
}
</script>
