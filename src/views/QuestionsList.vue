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
                <LeftBodyTask :score="item.score" :answer-count="item.answer_count" :view-count="item.view_count" />
              </v-list-item-content>
            </v-col>
            <v-col lg="10" md="10">
              <v-list-item-content>
                <BodyTask :id="item.id" :title="item.title" :body="splitBodyContent(item.body)" />

                <v-row>
                  <v-col md="10">
                    <TagList :tags="item.tags" />
                  </v-col>

                  <v-col md="2">
                    <UserDetails
                      :name="item.owner.display_name"
                      :country="item.owner.country"
                      :link-image="item.owner.profile_image"
                      :asked="item.creation_date"
                      :reputation="item.owner.reputation"
                    />
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
import TagList from '@/components/list/UserTags.vue'
import BodyTask from '@/components/list/BodyComment.vue'
import LeftBodyTask from '@/components/list/LeftBody.vue'
import UserDetails from '@/components/list/UserDetails.vue'
import ToolBar from '@/components/ToolBar'

export default {
  name: 'QuestionsList',
  components: {
    TagList,
    BodyTask,
    LeftBodyTask,
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
    },
    splitBodyContent (x) {
      const matched = x.match(/<p>.+<\/p>/)
      if (matched) {
        return matched[0] + '...'
      } else {
        return 'There isn\'t body of the question'
      }
    }
  }
}
</script>
