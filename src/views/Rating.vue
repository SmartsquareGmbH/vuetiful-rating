<template>
  <v-row justify="center">
    <v-icon class="mb-5" color="primary" size="92">
      mdi-emoticon-{{ emotion + (emotion !== "poop" ? "-outline" : "") }}
    </v-icon>

    <v-row justify="center" class="primary--text subtitle-1">
      <span>Der Vortrag entsprach meinen Erwartungen</span>
      <v-chip class="mt-2 mb-5" x-large outlined color="accent">
        <v-rating v-model="expected" full-icon="mdi-star" empty-icon="mdi-star" size="48" />
      </v-chip>

      <span>Es war einfach dem Coding zu folgen</span>
      <v-chip class="mt-2 mb-5" x-large outlined color="accent">
        <v-rating v-model="comprehensible" full-icon="mdi-star" empty-icon="mdi-star" size="48" />
      </v-chip>

      <span>Ich habe mich abgeholt gefühlt</span>
      <v-chip class="mt-2 mb-5" x-large outlined color="accent">
        <v-rating v-model="carryover" full-icon="mdi-rocket" empty-icon="mdi-rocket" size="48" />
      </v-chip>

      <v-btn class="mt-5" color="primary" :loading="saving" @click="submit">
        Bewerten
      </v-btn>
    </v-row>
  </v-row>
</template>

<script>
import { firestore } from "../plugins/firebase"

export default {
  data: () => ({
    expected: 3,
    comprehensible: 3,
    carryover: 3,
    saving: false,
  }),
  computed: {
    emotion() {
      const ratingSum = this.expected + this.comprehensible + this.carryover

      if (ratingSum === 3) return "poop"
      if (ratingSum === 15) return "excited"
      if (ratingSum <= 5) return "sad"
      if (ratingSum >= 10) return "happy"
      return "neutral"
    },
  },
  methods: {
    submit() {
      this.saving = true

      firestore
        .collection("/ratings")
        .add({
          expected: this.expected,
          comprehensible: this.comprehensible,
          carryover: this.carryover,
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
