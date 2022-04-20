<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>
        <span>VueProject</span>
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-title class="headline">
        <router-link to="/">Home</router-link> |
        <router-link to="/users">アカウントを作成</router-link>
      </v-toolbar-title>
      <v-spacer/>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>
