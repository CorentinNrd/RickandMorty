<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div>
    <router-view />
    <el-button btn text-sm m="3 t8" @click="router.back()"> Retour </el-button>
  </div>
</template>
