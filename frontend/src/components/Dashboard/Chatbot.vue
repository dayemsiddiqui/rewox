<template>
  <div>
    <!--Stats cards-->
    <div class="row">
    <div class="col-sm-8">
        <input type="text" placeholder="Ask a question" style="width: 100%;">
    </div>
    </div>
    <br> 

    <div class="row">
    <div class="col-sm-8">
        <label>Bot's Response</label>
         <div class="card">
            <div class="card-content">
              I want to listen songs by Atif Aslam
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
       }

      }
    }
  }

</script>
<style>

</style>
