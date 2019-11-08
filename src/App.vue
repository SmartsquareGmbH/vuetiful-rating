<template>
  <v-app>
    <v-app-bar app color="primary">
      <div class="d-flex align-center">
        <v-img
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="100"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn
        href="https://github.com/SmartsquareGmbH/vuetiful-rating"
        target="_blank"
        small
        fab
        elevation="4"
        color="transparent"
      >
        <v-img
          contain
          src="./assets/github.png"
          transition="scale-transition"
          width="0"
        />
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container fill-height>
        <v-row justify="center">
          <v-col cols="12" class="py-2">
            <v-row justify="center" align="center">
              <span>Der Vortrag entsprach meinen Erwartungen</span>
              <v-rating class="mb-10" v-model="rating[0]" size="64" />

              <span>Es war einfach dem Coding zu folgen</span>
              <v-rating class="mb-10" v-model="rating[1]" size="64" />

              <span>Ich habe mich abgeholt gefühlt</span>
              <v-rating v-model="rating[2]" size="64" />

              <v-btn color="primary" outlined class="mt-10">Bewerten</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    rating: []
  })
};
</script>
