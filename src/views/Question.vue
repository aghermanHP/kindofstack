<template>
  <div>
    <v-toolbar color="cyan" dark>
      <v-spacer />
      <v-toolbar-title> Question: {{ question.title }}</v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <v-row class="pl-5">
      <v-col md="10">
        <RenderHtml :html="question.body" />
      </v-col>
      <v-col md="md2">
        <UserDetails
          :link-image="question.owner.profile_image"
          :name="question.owner.display_name"
          :reputation="question.owner.reputation"
        />
      </v-col>
      <v-col md="auto">
        <UserTags :tags="question.tags" />
      </v-col>
    </v-row>
    <v-expansion-panels inset="true">
      <v-expansion-panel v-for="(item) in answers" :key="item.id" @change="getListOfComments(item.id)">
        <v-expansion-panel-header>
          Answered: {{ getHumanReadebelDate(item.creation_date) }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <render-html :html="item.body" class="pb-3" />
          <div v-for="comment in comments" :key="comment.id">
            <v-divider />
            <v-row>
              <v-col md="10">
                <RenderHtml :html="comment.body" />
              </v-col>
              <v-col>
                <b>{{ comment.owner.display_name }}</b>
                <p>{{ comment.creation_date | moment("MMMM Do YYYY") }}</p>
              </v-col>
            </v-row>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import UserTags from '@/components/listComponents/UserTags'
import UserDetails from '@/components/listComponents/UserDetails'
import RenderHtml from '@/components/RenderHtml'
import dayjs from 'dayjs'
export default {
  name: 'Question',
  components: {
    UserTags,
    UserDetails,
    RenderHtml
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
    getHumanReadebelDate (x) {
      const relativeTime = require('dayjs/plugin/relativeTime')
      dayjs.extend(relativeTime)
      return dayjs.unix(x).format('D/MMM/YYYY')
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
