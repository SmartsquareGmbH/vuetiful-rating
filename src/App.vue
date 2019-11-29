<template>
  <v-app>
    <v-app-bar app color="primary">
      <smartsquare-logo />
      <v-spacer />
      <github-logo />
    </v-app-bar>

    <v-content>
      <v-container fill-height>
        <v-row justify="center">
          <v-col cols="12" class="py-2">
            <thanking v-show="voted" />

            <rating @saved="voted = true" @error="errorSnackbar = true" />
          </v-col>
        </v-row>
      </v-container>

      <error-snackbar v-model="errorSnackbar" />
    </v-content>
  </v-app>
</template>

<script>
import SmartsquareLogo from "./components/static/SmartsquareLogo"
import ErrorSnackbar from "./components/static/ErrorSnackbar"
import GithubLogo from "./components/static/GithubLogo"
import Thanking from "./components/static/Thanking"
import Rating from "./views/rating/Rating"

export default {
  components: { ErrorSnackbar, Rating, GithubLogo, SmartsquareLogo, Thanking },
  data: () => ({
    voted: false,
    errorSnackbar: false,
  }),
}
</script>
