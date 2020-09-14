<template>
  <div>
    <v-toolbar color="cyan" dark>
      <v-spacer/>
      <v-toolbar-title> Question: {{question.title}}</v-toolbar-title>
      <v-spacer/>
    </v-toolbar>
    <v-row class="pl-5">
      <v-col md="10">
        <h4 v-html="question.body"></h4>
      </v-col>
      <v-col md="md2">
        <UserComponent
          :link_image="question.owner.profile_image"
          :name="question.owner.display_name"
          :reputation="question.owner.reputation"
        />
      </v-col>
      <v-col md="auto">
        <TagsComponent :tags="question.tags"/>
      </v-col>
    </v-row>
    <v-expansion-panels inset="true">
      <v-expansion-panel @change="getListOfComments(item.id)" v-for="(item) in answers" :key="item">
        <v-expansion-panel-header>
          Answered: {{item.creation_date | moment("MMMM Do YYYY")}}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p v-html="item.body"/>
          <div v-for="comment in comments" :key="comment">
            <v-divider/>
            <v-row>
              <v-col md="10">
                <p v-html="comment.body"/>
              </v-col>
              <v-col>
                <b>{{comment.owner.display_name}}</b><p>{{comment.creation_date | moment("MMMM Do YYYY")}}</p>
              </v-col>
            </v-row>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import TagsComponent from '@/components/listComponents/TagsComponent'
import UserComponent from '@/components/listComponents/UserComponent'
export default {
  name: 'Question',
  components: {
    TagsComponent,
    UserComponent
  },
  data: () => ({
    question: null,
    answers: null,
    comments: null,
    loading: true
  }),
  mounted () {
    this.getQuestionById()
    this.getListOfAnswers()
  },
  methods: {
    getQuestionById () {
      this.$api_requests_base_url.get('questions?id=' + this.$route.params.id)
        .then((response) => {
          this.loading = false
          this.question = response.data[0]
          this.isAnswered = response.data[0].is_answered
        })
    },
    getListOfAnswers () {
      this.$api_requests_base_url.get('answers?question_id=' + this.$route.params.id)
        .then((response) => {
          this.answers = response.data
        })
    },
    getListOfComments (x) {
      this.$api_requests_base_url.get('comments?answer_id=' + x)
        .then((response) => {
          this.comments = response.data
        })
    }
  }
}
</script>
