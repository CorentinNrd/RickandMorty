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
    <img :src="result.image" alt="image du personnage" />
    <p>{{ result.name || 'Nom inconnu' }}</p>
    <p>{{ result.species || 'Espèce inconnue' }}</p>
    <p>{{ result.status || 'Statut inconnu' }}</p>
    <p>{{ result.type || 'Type inconnu' }}</p>
    <p>{{ result.gender || 'Genre inconnu' }}</p>
    <!-- <span>
      <p>Liste des épisodes ou il apparaît</p>
      <ul>
        <li v-for="(episodes, key) in result.episode" :key="key">
          {{ episodes }}
        </li>
      </ul>
    </span> -->
    <span>
      <p v-for="(v, k) in result.origin" :key="k">{{ v }}</p>
    </span>
    <span>
      <p v-for="(v, k) in result.location" :key="k">{{ v }}</p>
    </span>
  </div>
</template>

<style lang="scss">
#infos {
  p {
    color: #fff;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
