<template>
  <div id="app">
    <Myheader/>
    <router-view></router-view>
    <Myfooter/>
  </div>
</template>
<script>
export default{
  components: { Myheader,Myfooter }
}
import Myheader from "./components/Myheader"
import Myfooter from "./components/Myfooter"
</script>


