<template>
  <v-container>
    <v-row
      justify="center"
    >
      <v-card
        flat
        width="90%"
        max-width="368"
        color="transparent"
      >
        <v-card-title
          class="justify-center headline"
        >
          ユーザー新規登録
        </v-card-title>

        <v-form
          ref="form"
          v-model="valid"
        >
          <email-form
            :email.sync="email"
          />
          <password-form
            :password.sync="password"
            validation
          />
          <v-card-text
            class="text-center"
          >
            <v-btn
              :disabled="!valid || loading"
              :loading="loading"
              color="primary"
              @click="signup"
            >
              登録する
            </v-btn>
          </v-card-text>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import emailForm from '~/components/users/emailForm.vue'
import passwordForm from '~/components/users/passwordForm.vue'

export default {
  components: {
    emailForm,
    passwordForm
  },
  data: () => ({
    valid: true,
    email: '',
    password: '',
    loading: false
  }),
  methods: {
    signup () {
      if (this.$refs.form.validate()) {
        this.loading = true
        alert(
          `email: ${this.email}\n` +
          `password: ${this.password}\n` +
          'これらをRailsに送信してuserを作成します'
        )
        setTimeout(() => {
          this.loading = false
          this.$refs.form.reset() // form clear
        }, 2000)
      }
    }
  }
}
</script>
