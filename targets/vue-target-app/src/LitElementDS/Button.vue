<template>
  <litelement-ds-button @click="changeText">
    {{ text }}
  </litelement-ds-button>
</template>

<script>
export default {
  name: 'LitElementDSButton',
  data() {
    return { text: 'Ahoy!' };
  },
  methods: {
    changeText() { this.text = 'You clicked me!'; }
  }
}
</script>
