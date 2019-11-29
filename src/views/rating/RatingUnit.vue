<template>
  <v-col-centered>
    <span>{{ localRating.description }}</span>
    <v-col-centered>
      <v-chip x-large outlined color="accent">
        <v-rating v-model="localRating.value" :full-icon="localRating.icon" :empty-icon="localRating.icon" size="48" />
      </v-chip>
    </v-col-centered>
  </v-col-centered>
</template>

<script>
import VColCentered from "../../components/VColCentered"

export default {
  name: "RatingUnit",
  components: {
    VColCentered,
  },
  props: {
    rating: {
      type: Object,
      required: true,
    },
  },
  computed: {
    localRating: {
      get() {
        return this.rating
      },
      set(rating) {
        this.$emit("update:rating", rating)
      },
    },
  },
}
</script>
