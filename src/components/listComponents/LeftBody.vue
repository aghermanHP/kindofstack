<template>
  <v-card-text>
    <v-flex class="mb-1">
      <h2>{{ score }}</h2>
      <p>Votes</p>
      <h2>{{ answerCount }}</h2>
      <p>Ansver</p>
      <p>{{ viewCount }} views </p>
    </v-flex>
  </v-card-text>
</template>

<script>
export default {
  name: 'LeftBody',
  props: {
    score: {
      default: 0,
      type: Number
    },
    answerCount: {
      default: 0,
      type: Number
    },
    viewCount: {
      default: 0,
      type: Number
    }
  }
}
</script>
