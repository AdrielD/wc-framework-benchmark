<template>
  <vanilla-ds-button @click="changeText">
    {{ text }}
  </vanilla-ds-button>
</template>

<script>
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
