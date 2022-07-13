<script setup lang="ts"></script>

<template>
  <div id="default">
    <Navbar />
    <router-view class="kl-views" />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
#default {
  .kl-views {
    margin: 100px 0px 0px 0px;
  }
}
</style>
