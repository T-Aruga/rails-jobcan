<template>
  <div />
</template>
<script>
export default {
  fetch ({ store }) {
    store.dispatch('userLogin', false)
  },
  created () {
    this.$router.replace('/')
  }
}
</script>
