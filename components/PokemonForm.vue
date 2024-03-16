<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";

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

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data);
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
