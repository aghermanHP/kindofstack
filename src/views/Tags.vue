<template>
  <v-row>
    <v-toolbar color="cyan" dark>
      <v-spacer/>
      <v-toolbar-title>Tags List</v-toolbar-title>
      <v-spacer/>
    </v-toolbar>
      <TagsComponent :tags="tags" :count="tags.count"/>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import TagsComponent from '@/components/listComponents/tagsComponent'
export default {
  name: 'Tags',
  components: {
    TagsComponent
  },
  created () {
    this.setTags()
  },
  computed: {
    ...mapState('TagsList', { tags: 'allTags' })
  },
  methods: {
    ...mapActions('TagsList', ['TagsAction']),
    setTags () {
      this.TagsAction()
    }
  }
}
</script>
