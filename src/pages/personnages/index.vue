<script setup lang="ts">
import { useCharactersStore } from '@/stores/characters';

const charactersStore = useCharactersStore();

const currentPage = ref(1);

const form = reactive({
  name: '',
});

onBeforeMount(() => {
  charactersStore.fetchCharacters(currentPage.value);
});

watchEffect(() => {
  charactersStore.fetchCharacters(currentPage.value);
  charactersStore.searchCharacters(form.name);
});

const { result, count } = storeToRefs(charactersStore);
</script>

<template>
  <div id="personnages">
    <el-row type="flex" justify="center">
      <el-form>
        <el-form-item>
          <el-input
            v-model="form.name"
            size="large"
            placeholder="Tapez votre recherche et laissez la magie s'effectuer"
            style="width: 350px"
          />
        </el-form-item>
      </el-form>
    </el-row>
    <el-row type="flex" justify="center" class="gap-20">
      <el-card
        v-for="(character, key) in result"
        :key="key"
        class="kl-cards"
        :body-style="{ padding: '0px' }"
      >
        <router-link :to="`/personnages/${character.id}`">
          <img
            class="img-characters"
            :src="character.image"
            alt="image du personnage"
          />
          <div style="padding: 20px">
            {{ character.name }}
          </div>
        </router-link>
      </el-card>
    </el-row>
    <div class="pagination">
      <el-pagination
        v-model:currentPage="currentPage"
        :page-size="20"
        background
        layout="prev, pager, next"
        :total="count"
      />
    </div>
  </div>
</template>

<style lang="scss">
#personnages {
  .gap-20 {
    gap: 20px;
  }

  a {
    color: #000;
    text-decoration: none;
    text-align: center;
  }

  .kl-cards {
    margin-bottom: 20px;
    width: 250px;
    height: auto;
  }
  .kl-cards:hover {
    transform: scale(1.03);
  }

  .el-pagination {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }

  .img-characters {
    width: 100%;
    height: 100%;
  }
}
</style>
