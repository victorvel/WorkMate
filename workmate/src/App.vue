<template>
  <v-app>
    <v-app-bar elevation="0" app color="white">
      <v-row no-gutters>
        <v-col cols="1"></v-col>
        <v-col cols="10">
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

            <div class="d-flex align-center mt-5">
                <v-btn class="mr-5" text>
                  <span class="mr-1">Offices</span>
                  <v-icon>mdi-office-building</v-icon>
                </v-btn>
              <v-btn class="mr-5" text>
                <span class="mr-1">About</span>
                <v-icon>mdi-information-outline</v-icon>
              </v-btn>

              <v-btn to="./officelist" text>
                <span class="mr-1">login</span>
                <v-icon>mdi-login</v-icon>
              </v-btn>
            </div>
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
