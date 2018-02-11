<template>
  <div>
     <notifications transition-name="notification-list" transition-mode="out-in"></notifications>
    <!--Stats cards-->
  <div class="row">
    <div class="col-sm-8">
        <div class="card">
          <div id="content" class="card-content" style="font-size: 25px;" v-html="statement">
          </div>
        </div>
    </div>
    <div class="col-sm-4">
      <pre>
        
      </pre>
    </div>
  </div>
  
  <div class="row">
    <div class="col-sm-8">
      <button class="btn btn-sm btn-primary">ORG</button>
      <button class="btn btn-sm btn-primary">PRODUCT</button>
      <button class="btn btn-sm btn-primary">DATE</button>
      <button class="btn btn-sm btn-primary">GPE</button>
      <button class="btn btn-sm btn-primary">EVENT</button>
      <button class="btn btn-sm btn-primary">TIME</button>
      <button class="btn btn-sm btn-primary">LOC</button>
      <button class="btn btn-sm btn-primary">PERSON</button>
    </div>
  </div>

  <div class="row" style="position: fixed; bottom: 60px; width: 100%;">
    <div class="col-sm-8">
      <button class="btn btn-lg btn-success">YES</button>
      <button class="btn btn-lg btn-danger">NO</button>
      <button class="btn btn-lg btn-warning">SKIP</button>
      
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
       statement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      }
    },
    mounted: function(){
      var selectedEntity = "date"
      console.log("In mounted")
      function gText(e) {
          var t = (document.all) ? document.selection.createRange().text : document.getSelection();
          if(t.type == "Range"){
            var start = t.anchorOffset
            var end = t.focusOffset
            // var statement = document.getElementById("content").innerText
            console.log("New", this.statement, t.focusOffset, t.anchorOffset, t)
            var tag = "<mark data-entity='" + selectedEntity + "'>"
            var  count = 0;
            var temp = this.statement
            temp = [temp.slice(0, start), tag , temp.slice(start, temp.length)].join('');
            count = count + tag.length;
            console.log("Count", count, temp)
            this.statement = [temp.slice(0, count + end), "</mark>", temp.slice(count + end)].join('');
            console.log("Count", count, temp, this.statement)
          }
      }

      document.onmouseup = gText.bind(this);
      if (!document.all) document.captureEvents(Event.MOUSEUP);
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
