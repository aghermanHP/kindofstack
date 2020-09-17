<template>
  <v-row>
    <v-toolbar color="cyan" dark>
      <v-spacer />
      <v-toolbar-title>Tags List</v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <UserTags :tags="tags" :count="tags.count" />
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import UserTags from '@/components/listComponents/UserTags'

export default {
  name: 'Tags',
  components: {
    UserTags
  },
  computed: {
    ...mapState('TagsList', { tags: 'allTags' })
  },
  created () {
    this.setTags()
  },
  methods: {
    ...mapActions('TagsList', ['TagsAction']),
    setTags () {
      this.TagsAction()
    }
  }
}
</script>
