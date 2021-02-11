<template>
  <div>
    Vanilla DS: <VanillaDSButton />
    <br /><br />
    Stencil DS: <StencilDSButton />
  </div>
</template>

<script>
import VanillaDSButton from './VanillaDS/Button.vue';
import StencilDSButton from './StencilDS/Button.vue';

export default {
  name: 'App',
  components: { VanillaDSButton, StencilDSButton },
}
</script>
