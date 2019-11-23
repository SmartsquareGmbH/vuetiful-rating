<template>
  <v-col :cols="cols">
    <v-row justify="center" align="center" class="primary--text subtitle-1">
      <slot />
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "VColCentered",
  props: {
    cols: {
      type: [String, Number],
      default: () => 12,
      validator: (it) => {
        if (it === "auto") return true
        else return it >= 1 && it <= 12
      },
    },
  },
}
</script>

<style scoped>
.col,
.row {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
