<template>
  <v-row justify="center">
    <v-icon class="mb-2" color="primary" size="128"> mdi-emoticon-{{ emotion }} </v-icon>

    <rating-unit v-for="(rating, index) in ratings" :key="index" :rating="rating" class="my-4" />

    <v-btn class="mt-6" color="primary" :loading="saving" @click="submit">
      Bewerten
    </v-btn>
  </v-row>
</template>

<script>
import { firestore } from "../../plugins/firebase"
import RatingUnit from "./RatingUnit"

export default {
  components: { RatingUnit },
  data: () => ({
    ratings: [
      {
        description: "Der Vortrag entsprach meinen Erwartungen",
        value: 3,
        icon: "mdi-star",
      },
      {
        description: "Es war einfach dem Coding zu folgen",
        value: 3,
        icon: "mdi-star",
      },
      {
        description: "Ich wurde abgeholt!",
        value: 3,
        icon: "mdi-rocket",
      },
    ],
    saving: false,
  }),
  computed: {
    ratingSum() {
      return this.ratings.reduce((acc, current) => acc + current.value, 0)
    },
    emotion() {
      if (this.ratingSum === 3) return "poop"
      else if (this.ratingSum <= 6) return "sad"
      else if (this.ratingSum >= 13) return "excited"
      else if (this.ratingSum >= 10) return "happy"
      else return "neutral"
    },
  },
  methods: {
    submit() {
      this.saving = true

      firestore
        .collection("/ratings")
        .add({
          expected: this.ratings[0].value,
          comprehensible: this.ratings[1].value,
          carryover: this.ratings[2].value,
          timestamp: new Date(),
        })
        .then(() => (this.saving = false))
        .then(() => this.$emit("saved"))
        .catch(() => this.$emit("error"))
    },
  },
}
</script>

<style>
.v-chip__content {
  align-items: normal !important;
}
</style>
