<template>
  <div>
    <notifications transition-name="notification-list" transition-mode="out-in"></notifications>
    <!--Stats cards-->
    <div class="row">
    <div class="col-sm-8">
        <input type="text" placeholder="Intent Name" v-model="payload.name" v-on:change="onChange" style="width: 100%;">
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
          <div class="card" v-for="item in views">
            <div class="card-content" >
              <div class="entities" v-html="item">
              {{ item }}
              </div>
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
          <div class="card" v-for="item in payload.answers">
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
  import EntityService from 'src/services/EntityService.js'
  // import Loading from 'src/components/Dashboard/Layout/LoadingMainPanel.vue'

  /*
  const WorldMap = () => ({
    component: import('./../Maps/WorldMap.vue'),
    loading: Loading,
    delay: 200
  })
  */
  
  export default {

    
    // computed: {
    //   storedIntent(){

    //   }
    // },
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
       // questions: [],
       views: [],
       answer: "",
       // answers: [],
       payload: {
        name: "",
        questions: [],
        answers: [],
        entities: [],
       },
       // entities: [],

      }
    },
    mounted: function(){
      console.log("Dashboard Just Mounted", this.$store.state.isIntentUpdate)
      if (this.$store.state.isIntentUpdate == true){
        this.payload = this.$store.state.intent
        this.views = this.payload.questions 
      }
    },

    destroyed: function(){
      this.$store.commit('removeIntent')
    },
    sockets:{
      connect: function(){
        console.log('socket connected')
      },
      event: function(val){
        console.log('New Data Received From Socket', val)
        val = JSON.parse(val)
        if(val.custom.task == 'NER' && val.custom.module == "intent_question"){
          console.log("Rendering questions")
          this.render(val)
        }
      },
      disconnect: function(){
        console.log("Socket Disconnected")
      }
    },
    methods: {
      addQuestion: function(){
        this.payload.questions.push(this.question)
        // this.$socket.emit('event', {type: 'NER', payload: {statement: this.question}});
        EntityService.identifyEntities({task: "NER", statement: this.question, custom: {task: 'NER', module:'intent_question',
          index: this.payload.questions.length - 1}})
        this.question = ""
        // this.payload =  {
        //     name: this.intent_name,
        //     questions: this.questions,
        //     answers: this.answers,
        //     action: {
        //       name: "",
        //       params: [
        //       {isRequired: true, name: "", entity_name: "", value: ""}
        //       ],
        //     },
        //     entities: this.entities
        //   }

      },
      addAnswer: function(){
        this.payload.answers.push({statement: this.answer, isEntityBased: true})
        this.answer = ""
      },
      save(){
        IntentService.saveIntents(this.payload, this.$notify)
        
        // this.payload = {}
        this.views = []
      },
      onChange: function(){
        // this.payload =  {
        //     name: this.intent_name,
        //     questions: this.questions,
        //     answers: this.answers,
        //     action: {
        //       name: "",
        //       params: [
        //       {isRequired: true, name: "", entity_name: "", value: ""}
        //       ],
        //     },
        //     entities: []
        //   }
      },
      render: function(response){
        
        var statement = this.payload.questions[response.custom.index]
        console.log("In Render", statement, this.payload.questions)
        var count = 0
        for (var i = 0; i < response.result.length; i++) {
          console.log("In Render Loop")
          var start = response.result[i].start
          var end = response.result[i].end
          var label = response.result[i].label
          this.payload.entities.push(label.toLowerCase())
          var tag = "<mark data-entity='" + label.toLowerCase() + "'>"
          statement = [statement.slice(0, start + count), tag , statement.slice(start + count)].join('');
          count = count + tag.length
          statement = [statement.slice(0, end + count), "</mark>", statement.slice(end + count)].join('');
          count = count + "</mark>".length
        }
        this.payload.entities =  [...new Set(this.payload.entities)] 
        // this.payload.entities = this.entities
        this.views.push(statement)
        console.log("Render complete", statement, this.payload.questions)
      }
    }
  }

</script>
<style>

</style>
