<template>
  <div>
     <notifications transition-name="notification-list" transition-mode="out-in"></notifications>
    <!--Stats cards-->
    <div class="row">
    <div class="col-sm-8">
        <input type="text" placeholder="Entity Name" v-model="payload.entity_name" style="width: 100%;">
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
          <div class="card" v-for="item in payload.values">
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
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {
       value_name: "",
       payload: {
        entity_name: "",
        values: [],
       },
      }
    },
    mounted: function(){
      console.log("Dashboard Just Mounted", this.$store.state.isEntityUpdate)
      if (this.$store.state.isEntityUpdate == true){
        this.payload = this.$store.state.entity
      }
    },
    destroyed: function(){
      this.$store.commit('removeEntity')
    },
    methods: {
      addEntity: function(event){
        this.payload.values.push(this.value_name)
        this.value_name = ""
      },
      removeValue: function(label){
        alert(label)
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
      }
    } 
  }

</script>
<style>

</style>
