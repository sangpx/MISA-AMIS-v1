<template>
  <div>
    <TheNavBar />
    <TheHeader />
    <TheContent />
  </div>
</template>

<script>
import TheNavBar from "./components/layout/TheNavBar.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import TheContent from "./components/layout/TheContent.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    TheNavBar,
    TheContent,
  },
};
</script>

<style>
@import url(./css/main.css);
</style>
