<template>
  <v-footer
    padless
  >
    <v-col
      class="text-center"
      cols="12"
    >
      <div class="body-2">
        &copy;{{ copyRightYear }} — <strong>{{ appName }}</strong>
      </div>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    appName: process.env.APP_NAME
  }),
  computed: {
    copyRightYear () {
      const start = 2020
      const now = new Date().getFullYear()
      return (start === now) ? start : `${start} - ${now}`
    }
  }
}
</script>
