<template>
  <v-card
  max-width="100%"
  class="justify-center"
  >
    <v-toolbar color="cyan" dark>
        <v-spacer/>
          <v-toolbar-title>Questions List</v-toolbar-title>
        <v-spacer/>
    </v-toolbar>

    <v-list three-line>
      <template v-for="(item, index) in postsList ">
        <v-list-item :key="item.title">
          <v-row class="mb-6">
            <v-col lg="1" md="1">
              <v-list-item-content>
                <LeftBodyTask :score="item.score" :answer_count="item.answer_count" :view_count="item.view_count"/>
              </v-list-item-content>
            </v-col>
            <v-col lg="10" md="10">
              <v-list-item-content>
                <BodyTask :title="item.title" :body="item.body"/>
                <v-row>
                  <v-col md="10">
                    <TagList :tags="item.tags"/>
                  </v-col>
                  <v-col md="2">
                    <UserComponent
                      :name="item.owner.display_name"
                      :link_image="item.owner.profile_image"
                      :asked="item.creation_date"
                      :reputation="item.owner.reputation"
                    />
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-col>
          </v-row>
        </v-list-item>
        <v-divider :key="index"></v-divider>
      </template>
    </v-list>
      <v-overlay :value="loading">
        <v-progress-circular indeterminate size="74"></v-progress-circular>
      </v-overlay>
  </v-card>
</template>

<script>
import TagList from '@/components/listComponents/tagsComponent.vue'
import BodyTask from '@/components/listComponents/BodyComment.vue'
import LeftBodyTask from '@/components/listComponents/LeftBody.vue'
import UserComponent from '@/components/listComponents/UserComponent.vue'
export default {
  name: 'QuestionsList',
  components: {
    TagList,
    BodyTask,
    LeftBodyTask,
    UserComponent
  },
  props: {
    msg: String
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
      this.$api_requests_base_url.get('questions')
        .then((response) => {
          this.loading = false
          this.postsList = response.data
        })
    }
  }
}
</script>
