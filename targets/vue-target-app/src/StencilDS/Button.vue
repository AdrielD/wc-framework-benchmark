<template>
  <stencil-ds-button @click="changeText">
    {{ text }}
  </stencil-ds-button>
</template>

<script>
export default {
  name: 'StencilDSButton',
  data() {
    return { text: 'Ahoy!' };
  },
  methods: {
    changeText() { this.text = 'You clicked me!'; }
  }
}
</script>
