<template>
  <svelte-ds-button @click="changeText">
    {{ text }}
  </svelte-ds-button>
</template>

<script>
export default {
  name: 'SvelteDSButton',
  data() {
    return { text: 'Ahoy!' };
  },
  methods: {
    changeText() { this.text = 'You clicked me!'; }
  }
}
</script>
