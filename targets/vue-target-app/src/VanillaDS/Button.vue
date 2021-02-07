<template>
  <vanilla-ds-button @click="changeText">
    {{ text }}
  </vanilla-ds-button>
</template>

<script>
import 'vanilla-ds/build/vanilla-ds'

export default {
  name: 'VanillaDSButton',
  data() {
    return { text: 'Ahoy!' };
  },
  methods: {
    changeText() { this.text = 'You clicked me!'; }
  }
}
</script>
