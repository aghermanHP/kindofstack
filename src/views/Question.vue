<template>
  <div>
    <ToolBar :message="'Question:  '+question.title" />

    <v-row class="pl-5">
      <v-col md="10">
        <!-- eslint-disable-next-line no-v-html -->
        <p v-html="question.body" />
        <!-- eslint-enable -->
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
          <!-- eslint-disable-next-line no-v-html -->
          <p class="pb-3" v-html="item.body" />
          <!-- eslint-enable -->

          <div v-for="comment in comments" :key="comment.id">
            <v-row>
              <v-col md="10">
                <!-- eslint-disable-next-line no-v-html-->
                <p v-html="comment.body" />
                <!-- eslint-enable -->
              </v-col>

              <v-col>
                <b>{{ comment.owner.display_name }}</b>
                <p>{{ comment.creation_date | moment('MMMM Do YYYY') }}</p>
              </v-col>
            </v-row>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import UserTags from '@/components/list/UserTags'
import UserDetails from '@/components/list/UserDetails'
import ToolBar from '@/components/ToolBar'
import dayjs from 'dayjs'

export default {
  name: 'Question',
  components: {
    UserTags,
    UserDetails,
    ToolBar
  },
  data: () => ({
    question: null,
    answers: null,
    comments: null,
    loading: true
  }),
  created () {
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
