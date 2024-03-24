<template>
  <div>
    <!-- <MySlider /> -->
    <searchbox />
    <cartproducts />
  </div>
</template>

<script>
export default {
  components: { searchbox, cartproducts },
};
import searchbox from "../components/searchbox";
// import MySlider from "../components/Myslider";
import cartproducts from "../components/cartproducts";
</script>
