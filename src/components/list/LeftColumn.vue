<template>
  <v-card-text>
    <v-flex class="mb-1">
      <h2>{{ comment.score }}</h2>

      <p>Votes</p>

      <h2>{{ comment.answer_count }}</h2>

      <p>Answer</p>

      <p>{{ comment.view_count }} views </p>
    </v-flex>
  </v-card-text>
</template>

<script>
export default {
  name: 'LeftBody',
  props: {
    comment: {
      required: true,
      type: Object
    }
  }
}
</script>
