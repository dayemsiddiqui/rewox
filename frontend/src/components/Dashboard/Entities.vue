<template>
  <div>
     <notifications transition-name="notification-list" transition-mode="out-in"></notifications>
    <!--Stats cards-->
    <div class="row">
    <div class="col-sm-8">
        <input type="text" placeholder="Entity Name" v-model="entity_name" v-on:change="onChange" style="width: 100%;">
    </div>
        <button class="btn btn-primary btn-sm" v-on:click="onSave"> Save </button>
    </div>
    <br> 

    <div class="row">
    <div class="col-sm-8">
        <label>Add Value</label>
        <input type="text" placeholder="entity value" v-model="value_name" v-on:keyup.enter="addEntity"  style="width: 100%;">
    </div>
    </div>

    <div class="row">
      <br>
      <div class="col-sm-8">
          <div class="card" v-for="item in values">
            <div class="card-content">
              {{item}}
            </div>
          </div>
          
      </div>
      <div class="col-sm-4">
        <pre>
          {{ payload }}
        </pre>
      </div>
    </div>


 


  </div>
</template>
<script>
  import CircleChartCard from 'src/components/UIComponents/Cards/CircleChartCard.vue'
  import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
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
       entity_name: "",
       values: [],
       value_name: "",
       payload: {},
      }
    },
    methods: {
      addEntity: function(event){
        this.values.push(this.value_name)
        this.value_name = ""
        this.payload = {
          entity_name: this.entity_name,
          values: this.values,
        }
      },
      removeValue: function(label){
        alert(label)
      },
      onChange: function(){
        this.payload = {
          entity_name: this.entity_name,
          values: this.values,
        }
      },
      onSave: function(){
        EntityService.saveEntities(this.payload)
        this.$notify({
          component: {
            template: `<span>Entity has been saved successfully.</span>`
          },
          horizontalAlign: 'right', // right | center | left
          verticalAlign: 'top', // top | bottom
          type: 'success'  // info | success | warning | danger
        })
        this.payload = ""
        this.entity_name = ""
        this.values = []

      }
    } 
  }

</script>
<style>

</style>
