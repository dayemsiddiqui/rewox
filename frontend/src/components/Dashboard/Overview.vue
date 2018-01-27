<template>
  <div>
    <notifications transition-name="notification-list" transition-mode="out-in"></notifications>
    <!--Stats cards-->
    <div class="row">
    <div class="col-sm-8">
        <input type="text" placeholder="Intent Name" v-model="intent_name" v-on:change="onChange" style="width: 100%;">
    </div>
        <button class="btn btn-primary btn-sm" v-on:click="save"> Save </button>
    </div>
    <br> 

    <div class="row">
    <div class="col-sm-8">
        <label>User says</label>
        <input type="text" placeholder="Add user expression" v-model="question" v-on:keyup.enter="addQuestion" style="width: 100%;">
    </div>
    </div>

    <div class="row">
      <br>
      <div class="col-sm-8">
          <div class="card" v-for="item in questions">
            <div class="card-content" >
              {{ item }}
            </div>
          </div>
      </div>
    </div>

    <div class="row">
      <br>
      <div class="col-sm-8">
         <label>Actions</label>
         <input type="text" placeholder="Action Name" style="width: 100%;">
      </div>
    </div>

    <div class="row">
      <br>
      <div class="col-sm-8">
         <label>Entities</label>
         <table class="table">
           <thead>
             <tr>
               <th>Required</th>
               <th>Param Name</th>
               <th>Entity</th>
               <th>Value</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td> <p-switch v-model="switches.defaultOn" type="primary" on-text="ON" off-text="OFF"></p-switch></td>
               <td>Anna</td>
               <td>Pitt</td>
               <td>35</td>
              </tr>
           </tbody>
         </table>
      </div>
    </div>

    <div class="row">
      <br>
      <div class="col-sm-8">
         <label>Answers</label>
         <input type="text" placeholder="Text Response" v-model="answer" v-on:keyup.enter="addAnswer" style="width: 100%;">
      </div>
    </div>

    <div class="row">
      <br>
      <div class="col-sm-8">
          <div class="card" v-for="item in answers">
            <div class="card-content">
              {{ item.statement }}
            </div>
          </div>
      </div>
    </div>

    <pre>
      {{ payload }}
    </pre>

 


  </div>
</template>
<script>
  import CircleChartCard from 'src/components/UIComponents/Cards/CircleChartCard.vue'
  import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
  import IntentService from 'src/services/IntentService.js'
  // import Loading from 'src/components/Dashboard/Layout/LoadingMainPanel.vue'

  /*
  const WorldMap = () => ({
    component: import('./../Maps/WorldMap.vue'),
    loading: Loading,
    delay: 200
  })
  */
  
  export default {
    components: {
      StatsCard,
      ChartCard,
      CircleChartCard
      // WorldMap
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {
        switches: {
         defaultOn: true,
         plainOn: true,
         withIconsOn: true,
       },
       intent_name: "",
       question: "",
       questions: [],
       answer: "",
       answers: [],
       payload: {}
      }
    },
    sockets:{
      connect: function(){
        console.log('socket connected')
      },
      customEmit: function(val){
        console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
      },
      disconnect: function(){
        console.log("Socket Disconnected")
      }
    },
    methods: {
      addQuestion: function(){
        this.questions.push(this.question)
        this.$socket.emit('event', {type: 'NER', payload: {statement: this.question}});
        this.question = ""
        this.payload =  {
            name: this.intent_name,
            questions: this.questions,
            answers: this.answers,
            action: {
              name: "",
              params: [
              {isRequired: true, name: "", entity_name: "", value: ""}
              ],
            },
            entities: []
          }

      },
      addAnswer: function(){
        this.answers.push({statement: this.answer, isEntityBased: true})
        this.answer = ""
      },
      save: function(){
        IntentService.saveIntents(this.payload)
        this.$notify({
          component: {
            template: `<span>Intent has been saved successfully.</span>`
          },
          horizontalAlign: 'right', // right | center | left
          verticalAlign: 'top', // top | bottom
          type: 'success'  // info | success | warning | danger
        })
        this.payload = {}
        this.answers = []
        this.questions = []
        this.intent_name = ""
      },
      onChange: function(){
        this.payload =  {
            name: this.intent_name,
            questions: this.questions,
            answers: this.answers,
            action: {
              name: "",
              params: [
              {isRequired: true, name: "", entity_name: "", value: ""}
              ],
            },
            entities: []
          }
      }
    }
  }

</script>
<style>

</style>
