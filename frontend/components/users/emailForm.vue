<template>
  <v-text-field
    v-model="setEmail"
    :rules="[rules.match]"
    label="メールアドレスを入力"
    outlined
    required
    validate-on-blur
  />
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    rules: {
      match: value => /.+@.+\..+/.test(value) || ''
    }
  }),
  computed: {
    setEmail: {
      get () { return this.email },
      set (newVal) { return this.$emit('update:email', newVal) }
    }
  }
}
</script>
