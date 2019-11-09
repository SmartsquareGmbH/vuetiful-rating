<template>
  <v-snackbar v-model="visible" color="error" :timeout="2000">
    Irgendwas ist schief gelaufen 🤔
    <v-btn icon @click="visible = false">
      <v-icon>
        mdi-close
      </v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    visible: {
      get: function() {
        return this.value;
      },
      set: function(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>
