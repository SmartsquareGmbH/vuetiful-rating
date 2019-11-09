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
            <rating @submit="store"></rating>
          </v-col>
        </v-row>
      </v-container>

      <error-snackbar v-model="errorSnackbar"></error-snackbar>
    </v-content>
  </v-app>
</template>

<script>
import { firestore } from "./plugins/firebase";
import SmartsquareLogo from "./components/SmartsquareLogo";
import ErrorSnackbar from "./components/ErrorSnackbar";
import GithubLogo from "./components/GithubLogo";
import Rating from "./components/Rating";

export default {
  components: { ErrorSnackbar, Rating, GithubLogo, SmartsquareLogo },
  data: () => ({
    errorSnackbar: false
  }),
  methods: {
    store(rating) {
      firestore
        .collection("/ratings")
        .add(rating)
        .then(() => (this.errorSnackbar = true))
        .catch(() => (this.errorSnackbar = true));
    }
  }
};
</script>
