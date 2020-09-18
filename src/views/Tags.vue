<template>
  <v-row>
    <ToolBar :message="'Tags list'" />
    <UserTags :tags="tags" :count="tags.count" />
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import UserTags from '@/components/listComponents/UserTags'
import ToolBar from '@/components/ToolBar'

export default {
  name: 'Tags',
  components: {
    UserTags,
    ToolBar
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
