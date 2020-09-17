<template>
  <v-card-text>
    <v-flex class="mb-1">
      <h3 class="text-left">
        <router-link :to="{name:'questionDetails', params: {id: id}}">
          <strong class="title">{{ title }}</strong>
        </router-link>
      </h3>
      <RenderHtml :html="body" />
    </v-flex>
  </v-card-text>
</template>

<script>
import RenderHtml from '@/components/RenderHtml'

export default {
  name: 'BodyTask',
  components: {
    RenderHtml
  },
  props: {
    title: {
      default: '',
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
  },
  created () {
    this.body = this.body.match(/<p>.+<\/p>/).toString()
  }
}
</script>
