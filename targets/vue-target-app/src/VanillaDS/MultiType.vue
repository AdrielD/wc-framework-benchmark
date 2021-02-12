<template>
  <vanilla-ds-multitype
    v-bind:title="title"
    v-bind:itemlist="itemList"
  >
    <vanilla-ds-button slot="button"></vanilla-ds-button>
  </vanilla-ds-multitype>
</template>

<script>
export default {
  name: 'VanillaDSMultiType',
  data() {
    return {
      title: 'Multitype component',
      itemList: ['pizza', 'potato', 'banana'],
    };
  },
}
</script>
