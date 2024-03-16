<template>
  <ULandingGrid>
    <PokemonItemList v-for="item in state.collection" :item="item" :key="item.id" />
  </ULandingGrid>
</template>

<script setup lang="ts">
const state = reactive({
  collection: [
    {
      id: 10,
      name: "Caterpie",
      description:
        "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    },
    {
      id: 9,
      name: "Blastoise",
      description:
        "It deliberately increases its body weight so it can withstand the recoil of the water jets it fires.",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    },
  ],
});
</script>
