<template>
  <div>
    <UPageHero
      icon="i-simple-icons-pokemon"
      title="Pokédex"
      description="Gerencie seus Pokémons aqui."
    />

    <PokemonList />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Catálogo',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})
</script>
