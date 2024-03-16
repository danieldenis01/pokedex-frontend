<template>
  <div>
    <UPageHeader
      headline="Pokédex"
      title="Adicionar Novo"
      description="Gerencia a Lista de Pokémons"
    />

    <PokemonForm />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Adicionar Novo',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})
</script>
