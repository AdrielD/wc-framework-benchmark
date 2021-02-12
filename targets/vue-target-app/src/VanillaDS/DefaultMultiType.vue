<template>
  <vanilla-ds-multitype
    v-bind:title="title"
    v-bind:itemlist="itemList"
    v-bind:buttonprops="buttonProps"
  >
  </vanilla-ds-multitype>
</template>

<script>
export default {
  name: 'VanillaDSDefaultMultiType',
  data() {
    return {
      title: 'Multitype component (default button)',
      itemList: ['red', 'blue', 'green', 'yellow'],
      buttonProps: JSON.stringify({ collapsedText: "expandir", expandedText: "recolher" }),
    };
  },
}
</script>
