<template>
  <v-row>
    <ToolBar message="Tags list" />
    <UserTags v-if="technologiesTags" :tags="technologiesTags" :count="technologiesTags.count" />
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { TAGS } from '@/store/gettersTypes'
import { FETCH_TAGS } from '@/store/actionTypes'

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
    this.tagsFetch()
  },
  methods: {
    ...mapActions({ tagsFetch: FETCH_TAGS })
  }
}
</script>
