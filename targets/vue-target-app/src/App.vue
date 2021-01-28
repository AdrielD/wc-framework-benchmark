<template>
  <vanilla-ds-button @click="changeText">
    {{ text }}
  </vanilla-ds-button>
</template>

<script>
import 'vanilla-ds/build/vanilla-ds'

export default {
  name: 'App',
  data() {
    return { text: 'Ahoy!' };
  },
  methods: {
    changeText() { this.text = 'You clicked me!'; }
  }
}
</script>
