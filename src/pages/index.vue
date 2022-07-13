<script setup lang="ts">
import { useCharacterStore } from '@/stores/character';

const number = ref();
const characterStore = useCharacterStore();
const { result } = toRefs(characterStore);

const randomNumber = () => {
  number.value = Math.floor(Math.random() * 100) + 1;
};

const init = () => {
  return characterStore.fetchCharacter(number.value).then();
};

onMounted(() => {
  randomNumber();
  init();
});
</script>

<template>
  <div id="index">
    <el-row class="kl-text-head" type="flex" justify="center">
      <span
        >Hello, bienvenue à toi, j'ai conceptualisé cette webapp pour
        m'entrainer techniquement.</span
      >
      <span
        >Cela dit, tu pourra aussi chercher tout tes personnages préférés de
        Rick and Morty :).</span
      >
    </el-row>
    <el-row type="flex" justify="center">
      <el-card class="kl-cards" :body-style="{ padding: '0px' }">
        <router-link :to="`/personnages/${result.id}`">
          <img
            class="img-characters"
            :src="result.image"
            alt="image du personnage"
          />
          <div class="kl-footer-card" style="padding: 20px">
            <p>
              {{ result.name || "Nom inconnu de l'espèce humaine" }}
            </p>
            <p>
              {{ result.species || "Espèce inconnu de l'espèce humaine" }}
            </p>
            <p>
              {{ result.gender || "Genre inconnu de l'espèce humaine" }}
            </p>
          </div>
        </router-link>
      </el-card>
    </el-row>
  </div>
</template>

<style lang="scss">
#index {
  min-height: 1000px;

  .kl-text-head {
    flex-direction: column;
    align-items: center;
    color: #fff;
    margin: 0px 0px 40px 0px;
    padding: 30px;
  }

  .kl-cards:hover {
    transform: scale(1.03);
  }

  .kl-footer-card {
    display: flex;
    flex-direction: column;
  }

  a {
    color: #000;
    text-decoration: none;
    text-align: center;
  }
}
</style>
