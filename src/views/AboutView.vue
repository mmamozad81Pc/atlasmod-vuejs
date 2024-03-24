<template>
  <div>
    <Pagebar />
    <about />
  </div>
</template>

<script>
export default {
  components: { about, Pagebar },
};
import Pagebar from "../components/Pagebarabout.vue";
import about from "../components/about.vue";
</script>