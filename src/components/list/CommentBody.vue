<template>
  <v-card-text>
    <v-flex class="mb-1">
      <h3 class="text-left">
        <router-link :to="{ name:'question.details', params: { id: comment.id } }">
          <strong class="title">{{ comment.title }}</strong>
        </router-link>
      </h3>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p v-html="getsplitedBody" />
    </v-flex>
  </v-card-text>
</template>

<script>
export default {
  name: 'BodyTask',
  props: {
    comment: {
      required: true,
      type: Object
    }
  },
  computed: {
    getsplitedBody () {
      const splitedBody = this.comment.body.match(/<p>.+<\/p>/)
      if (splitedBody) {
        return splitedBody[0] + '...'
      } else {
        return 'There isn\'t body of the question' + '...'
      }
    }
  }
}
</script>
