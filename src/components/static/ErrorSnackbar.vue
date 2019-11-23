<template>
  <v-snackbar v-model="visible" color="error" :timeout="2000">
    Irgendwas ist schief gelaufen 🤔
    <v-btn icon @click="visible = false">
      <v-icon>
        {{ mdiClose }}
      </v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mdiClose } from "@mdi/js"

export default {
  props: {
    value: {
      type: Boolean,
      default: () => false,
    },
  },
  data: () => ({ mdiClose }),
  computed: {
    visible: {
      get: function() {
        return this.value
      },
      set: function(value) {
        this.$emit("input", value)
      },
    },
  },
}
</script>
