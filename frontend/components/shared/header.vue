<template>
  <div>
    <v-app-bar
      elevation="1"
      color="teal lighten-3"
    >
      <v-toolbar-title>
        <nuxt-link
          to="/"
          class="link-black font-weight-bold"
        >
          {{ appName }}
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer />

      <v-toolbar-items
        v-for="(link, i) in links"
        :key="i"
      >
        <v-btn
          :to="link.to"
          text
          class="font-weight-bold"
        >
          {{ link.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    appName: process.env.APP_NAME,
    links: [
      { title: 'ユーザ追加', to: '/signup' },
      { title: 'ログイン', to: '/login' }
    ]
  })
}
</script>
