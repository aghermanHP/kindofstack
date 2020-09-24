<template>
  <v-card
    max-width="100%"
    class="justify-center"
  >
    <ToolBar message="Questions List" />

    <v-list v-if="!loading" three-line>
      <template v-for="(item, index) in postsList">
        <v-list-item :key="item.id">
          <v-row class="mb-6">
            <v-col lg="1" md="1">
              <v-list-item-content>
                <LeftColumn :comment="item"/>
              </v-list-item-content>
            </v-col>
            <v-col lg="10" md="10">
              <v-list-item-content>
                <CommentBody :comment="item"/>

                <v-row>
                  <v-col md="10">
                    <UserTags :tags="item.tags" />
                  </v-col>

                  <v-col md="2">
                    <UserDetails :owner="item.owner" :asked="item.creation_date" />
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>
        <v-divider :key="index" />
      </template>
    </v-list>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="74" />
    </v-overlay>
  </v-card>
</template>

<script>
import UserTags from '@/components/list/UserTags.vue'
import CommentBody from '@/components/list/CommentBody.vue'
import LeftColumn from '@/components/list/LeftColumn.vue'
import UserDetails from '@/components/list/UserDetails.vue'
import ToolBar from '@/components/ToolBar'

export default {
  name: 'QuestionsList',
  components: {
    UserTags,
    CommentBody,
    LeftColumn,
    UserDetails,
    ToolBar
  },
  props: {
    msg: {
      default: '',
      type: String
    }
  },
  data: () => ({
    loading: true,
    postsList: []
  }),
  created () {
    this.getListOfComments()
  },
  methods: {
    getListOfComments () {
      this.$apiRequestsBaseUrl.get('questions')
        .then((response) => {
          this.loading = false
          this.postsList = response.data
        })
    }
  }
}
</script>
