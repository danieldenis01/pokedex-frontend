<template>
  <UContainer>
    <UPage>
      <template #left>
        <UAside :links="links">
          <template #bottom>
            <UDivider type="dashed" class="my-6" />

            <UPageLinks :links="pageLinks" />
          </template>
        </UAside>
      </template>

      <NuxtPage />
    </UPage>
    <UNotifications />
  </UContainer>
</template>

<script setup lang="ts">
const links = [
  {
    label: "Catálogo",
    icon: "i-heroicons-book-open",
    to: "/",
  },
  {
    label: "Adicionar Novo",
    icon: "i-heroicons-squares-plus",
    to: "/novo",
  },
];

const pageLinks = [{
  icon: 'i-heroicons-heart',
  label: 'Nuxt.js + Back em Rails',
  to: 'https://invenio.dev.br',
  target: '_blank'
}]
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
