<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-app-title>
        <router-link to="/"><span>ibukiProject</span></router-link>
      </v-app-title>
      <v-spacer/>
      <v-app-title class="headline">
        <router-link to="/login">ログイン</router-link> |
        <router-link to="/users">アカウントを作成</router-link>
      </v-app-title>
      <v-spacer/>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
