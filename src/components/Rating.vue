<template
  ><v-row justify="center" align="center">
    <span>Der Vortrag entsprach meinen Erwartungen</span>
    <v-rating class="mb-10" v-model="expected" size="64" />

    <span>Es war einfach dem Coding zu folgen</span>
    <v-rating class="mb-10" v-model="comprehensible" size="64" />

    <span>Ich habe mich abgeholt gefühlt</span>
    <v-rating v-model="carryover" size="64" />

    <v-btn class="mt-10" color="primary" @click="submit" outlined>
      Bewerten
    </v-btn>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    expected: 0,
    comprehensible: 0,
    carryover: 0
  }),
  methods: {
    submit() {
      this.$emit("submit", {
        expected: this.expected,
        comprehensible: this.comprehensible,
        carryover: this.carryover
      });
    }
  }
};
</script>
