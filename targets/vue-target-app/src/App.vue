<template>
  <div>
    <div>
      <p>MultiType showcases:</p>
      <p>Vanilla DS:</p>
      <DefaultVanillaDSMultiType />
      <br /><br />
      <VanillaDSMultiType />
    </div>
    <br /><br />
    <div>
      <p>Button showcases:</p>
      Vanilla DS: <VanillaDSButton />
      <br /><br />
      LitElement DS: <LitElementDSButton />
      <br /><br />
      Stencil DS: <StencilDSButton />
      <br /><br />
      Svelte DS: <SvelteDSButton />
    </div>
  </div>
</template>

<script>
import VanillaDSButton from './VanillaDS/Button.vue';
import LitElementDSButton from './LitElementDS/Button.vue';
import StencilDSButton from './StencilDS/Button.vue';
import SvelteDSButton from './SvelteDS/Button.vue';
import DefaultVanillaDSMultiType from './VanillaDS/DefaultMultiType.vue';
import VanillaDSMultiType from './VanillaDS/MultiType.vue';

export default {
  name: 'App',
  components: {
    VanillaDSButton,
    LitElementDSButton,
    StencilDSButton,
    SvelteDSButton,
    DefaultVanillaDSMultiType,
    VanillaDSMultiType,
  },
}
</script>
