<template>
  <v-card-text>
    <v-flex class="mb-1">
      <h3 class="text-left">
        <router-link :to="{ name:'questionDetails', params: { id: id } }">
          <strong class="title">{{ title }}</strong>
        </router-link>
      </h3>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p v-html="body" />
    </v-flex>
  </v-card-text>
</template>

<script>
export default {
  name: 'BodyTask',
  props: {
    title: {
      default: null,
      type: String
    },
    body: {
      default: null,
      type: String
    },
    id: {
      default: null,
      type: Number
    }
  }
}
</script>
