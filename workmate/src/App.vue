<template>
  <v-app>
    <v-app-bar elevation="0" app color="white">
      <v-row no-gutters>
        <v-col cols="1"></v-col>
        <v-col cols="11">
          <v-row>
          <div class="d-flex align-center">
            <router-link to="/">
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2 mt-7"
              contain
              :src="require('./assets/long_logo.png')"
              transition="scale-transition"
              width="250px"
            />
            </router-link>
          </div>

          <v-spacer></v-spacer>

          <v-btn
            to="./officelist"
            text
          >
            <span class="mr-2">Latest Release</span>
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style scoped>
#title a {
  color: white;
}
</style>
