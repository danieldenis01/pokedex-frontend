<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

const toast = useToast()

const schema = object({
  name: string()
    .min(3, "Precisa ter pelo menos 3 caracteres")
    .required("Obrigatório"),
  description: string()
    .min(8, "Precisa ter pelo menos 8 caracteres")
    .required("Obrigatório"),
  image: string().required("Obrigatório"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  name: undefined,
  description: undefined,
  image: undefined,
});

const goToHome = async () => {
  await navigateTo({ path: '/' })
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const pokemon = await $fetch('http://localhost:4000/pokemons', {
    method: 'POST',
    body: {
      ...event.data
    }
  })

  toast.add({
    id: 'pokemon_created',
    title: 'Pokemon Criado',
    timeout: 0,
    actions: [{
      label: 'Ver Item',
      click: () => { goToHome() }
    }]
  })
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Nome" name="name">
      <UInput v-model="state.name" />
    </UFormGroup>
    <UFormGroup label="Descrição" name="description">
      <UTextarea v-model="state.description" />
    </UFormGroup>
    <UFormGroup label="URL da Imagem" name="image">
      <UInput v-model="state.image" />
    </UFormGroup>

    <UCard v-if="state.image">
      <img :src="state.image" alt="" width="100" />
    </UCard>


    <UButton type="submit">Salvar</UButton>
  </UForm>
</template>
