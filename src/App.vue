<template>
  <v-app>
    <v-app-bar app color="primary">
      <smartsquare-logo></smartsquare-logo>
      <v-spacer></v-spacer>
      <github-logo></github-logo>
    </v-app-bar>

    <v-content>
      <v-container fill-height>
        <v-row justify="center">
          <v-col cols="12" class="py-2">
            <thanking v-show="voted"></thanking>

            <rating @submit="store"></rating>
          </v-col>
        </v-row>
      </v-container>

      <error-snackbar v-model="errorSnackbar"></error-snackbar>
    </v-content>
  </v-app>
</template>

<script>
import { firestore } from "./plugins/firebase"
import SmartsquareLogo from "./components/SmartsquareLogo"
import ErrorSnackbar from "./components/ErrorSnackbar"
import GithubLogo from "./components/GithubLogo"
import Thanking from "./components/Thanking"
import Rating from "./components/Rating"

export default {
  components: { ErrorSnackbar, Rating, GithubLogo, SmartsquareLogo, Thanking },
  data: () => ({
    voted: false,
    saving: true,
    errorSnackbar: false,
  }),
  methods: {
    store(rating) {
      this.saving = true

      firestore
        .collection("/ratings")
        .add(Object.assign({ timestamp: new Date() }, rating))
        .then(() => (this.voted = true))
        .catch(() => (this.errorSnackbar = true))
    },
  },
}
</script>
