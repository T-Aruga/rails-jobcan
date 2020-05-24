<template>
  <v-text-field
    v-model="setPassword"
    :rules="validation ? [rules.match] : [rules.required]"
    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
    :type="show ? 'text' : 'password'"
    :hint="validation ? hint : undefined"
    :counter="validation"
    label="パスワードを入力"
    outlined
    required
    validate-on-blur
    autocomplete="on"
    @click:append="show = !show"
  />
</template>

<script>
export default {
  props: {
    password: {
      type: String,
      default: ''
    },
    validation: {
      type: Boolean,
      default: false
    }
  },
  data () {
    const hint = '8文字以上、半角英数字•ﾊｲﾌﾝ•ｱﾝﾀﾞｰﾊﾞｰが使えます'
    return {
      show: false,
      hint,
      rules: {
        required: value => !!value || '',
        match: value => /^[\w-]{8,72}$/.test(value) || hint
      }
    }
  },
  computed: {
    setPassword: {
      get () { return this.password },
      set (newVal) { return this.$emit('update:password', newVal) }
    }
  }
}
</script>
