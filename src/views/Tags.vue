<template>
  <v-row>
    <ToolBar message="Tags list" />
    <UserTags v-if="technologiesTags" :tags="technologiesTags" :count="technologiesTags.count" />
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { TAGS } from '@/store/gettersTypes'
import { FETCHTAGS } from '@/store/actionTypes'

import UserTags from '@/components/list/UserTags'
import ToolBar from '@/components/ToolBar'

export default {
  name: 'Tags',
  components: {
    UserTags,
    ToolBar
  },
  computed: {
    ...mapGetters({ technologiesTags: TAGS })
  },
  created () {
    this.tagsAction()
  },
  methods: {
    ...mapActions({ tagsAction: FETCHTAGS })
  }
}
</script>
