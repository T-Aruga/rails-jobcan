<template>
  <v-app>
    <login-header />
    <nuxt />
    <my-footer v-if="!$store.state.loggedIn" />
  </v-app>
</template>

<script>
import loginHeader from '~/components/shared/loginHeader.vue'
import myFooter from '~/components/shared/footer.vue'

export default {
  components: {
    loginHeader,
    myFooter
  }
}
</script>
