<template>
  <div>
    <!--Stats cards-->
    <div class="row">
    <div class="col-sm-8">
        <input type="text" placeholder="Ask a question" v-model="question" style="width: 100%;">
    </div>
    <button class="btn btn-primary btn-sm" v-on:click="send">Send</button>
    </div>
    <br> 

    <div class="row">
    <div class="col-sm-8">
        <label>Bot's Response</label>
         <div class="card">
            <div class="card-content">
              {{ answer }}
            </div>
          </div>
    </div>
    </div>

    <div class="row">
      <br>
      <div class="col-sm-8">
         <label>Actions</label>
          <div class="card">
            <div class="card-content">
              play_songs
            </div>
          </div>
      </div>
    </div>

    <div class="row">
      <br>
      <div class="col-sm-8">
         <label>JSON Response</label>
         <br>
         <code>
         <pre>
           {
            question: 'I want to listen to songs of Atif Aslam',
            response: 'Ok playing Atif Aslam songs',
            entities: [
            {
            name: artist,
            value: 'Atif Aslam'
            }
            ],
            actions: [
            {name: 'play_song', 
            params: [name: 'artist_name', value: 'Atif Aslam',
                     entity_name: 'artist'],
            isRequired: true,
            },
            ],
           }
         </pre>
         
         </code>
      </div>

    </div>

<!--     <div class="row">
      <br>
      <div class="col-sm-8">
         <label>Answers</label>
         <input type="text" placeholder="Text Response" style="width: 100%;">
      </div>
    </div>

    <div class="row">
      <br>
      <div class="col-sm-8">
          <div class="card">
            <div class="card-content">
              Ok playing songs by <span style="color: red;"> @artist </span>
            </div>
          </div>
      </div>
    </div>
 -->
 


  </div>
</template>
<script>
  import CircleChartCard from 'src/components/UIComponents/Cards/CircleChartCard.vue'
  import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
  import BotService from 'src/services/BotsService.js'
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
       payload: {},
       question: "New Call",
       answer: "Hii!!!",
      }
    },
    sockets:{
      connect: function(){
        console.log('socket connected')
      },
      event: function(val){
        console.log('New Data Received From Socket', val)
        val = JSON.parse(val)
        if(val.custom.task == 'BOT_RESPOND' && val.custom.module == "bot_question"){
          console.log("Rendering answer", val.result.response, val.result.response.statement)
          this.answer = val.result.response
        }
      },
      disconnect: function(){
        console.log("Socket Disconnected")
      }
    },
    methods: {
      send(){
        this.payload = {
          statement: this.question,
          task: 'BOT_RESPOND',
          custom: {
            task: 'BOT_RESPOND',
            module: 'bot_question',
          },
        }
        console.log("Payload", JSON.stringify(this.payload, null, 2))
        BotService.askBot(this.payload)
      }

    }
  }

</script>
<style>

</style>
