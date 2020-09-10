<template>
  <v-card-text>
    <v-flex class="mb-1">
        <h3 class="text-left">
          <router-link to="/">
            <strong class="title">{{title}}</strong>
          </router-link>
        </h3>
        <v-textarea v-html="body.match(/<p>.+<\/p>/).toString()"/>
    </v-flex>
  </v-card-text>
</template>

<script>
export default {
  name: 'BodyTask',
  props: {
    title: String,
    body: String
  }
}
</script>
