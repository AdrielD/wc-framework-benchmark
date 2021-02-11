<template>
  <div>
    Vanilla DS: <VanillaDSButton />
    <br /><br />
    LitElement DS: <LitElementDSButton />
    <br /><br />
    Stencil DS: <StencilDSButton />
    <br /><br />
    Svelte DS: <SvelteDSButton />
  </div>
</template>

<script>
import VanillaDSButton from './VanillaDS/Button.vue';
import LitElementDSButton from './LitElementDS/Button.vue';
import StencilDSButton from './StencilDS/Button.vue';
import SvelteDSButton from './SvelteDS/Button.vue';

export default {
  name: 'App',
  components: {
    VanillaDSButton,
    LitElementDSButton,
    StencilDSButton,
    SvelteDSButton
  },
}
</script>
