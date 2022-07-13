<script setup lang="ts">
import { useCharacterStore } from '@/stores/character';

const characterStore = useCharacterStore();
const { result } = toRefs(characterStore);

const props = withDefaults(
  defineProps<{
    id: string;
  }>(),
  {}
);

const init = () => {
  return characterStore.fetchCharacter(props.id).then();
};

onMounted(() => {
  init();
});
</script>

<template>
  <div id="infos">
    <h1>Info</h1>
    <p>{{ result.name || 'Nom inconnu' }}</p>
    <p>{{ result.species || 'Espèce inconnue' }}</p>
    <p>{{ result.status || 'Statut inconnu' }}</p>
    <p>{{ result.type || 'Type inconnu' }}</p>
    <p>{{ result.gender || 'Genre inconnu' }}</p>
  </div>
</template>

<style lang="scss">
#infos {
}
</style>
