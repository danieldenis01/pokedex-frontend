<template>
  <UCard class="col-span-3 row-span-2">
    <img :src="item.image" alt="" />
    <template #footer>
      <h2 class="text-lg font-bold">{{ item.name }}</h2>
      <p class="text-sm">{{ item.description }}</p>
    </template>
  </UCard>
</template>

<script setup lang="ts">
const props = defineProps(['item']);
const { item } = props;
</script>
