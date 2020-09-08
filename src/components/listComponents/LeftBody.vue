<template>
  <v-card-text>
    <v-flex class="mb-1">
        <h2>{{score}}</h2>
        <p>Votes</p>
        <h2>{{answer_count}}</h2>
        <p>Ansver</p>
        <p>{{view_count}} views </p>
    </v-flex>
  </v-card-text>
</template>

<script>
export default {
  name: 'LeftBody',
  props: {
    score: Number,
    answer_count: Number,
    view_count: Number
  }
}
</script>
