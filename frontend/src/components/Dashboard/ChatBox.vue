<template>
  <div>
    <div class="box card">
    <div class="messages">
    <div class="row">
      <div class="bot">
        <div class="image">
          <img src="https://t00.deviantart.net/aLmB1AZYhqpf6HfyMlw3kb6KsGg=/300x200/filters:fixed_height(100,100):origin()/pre00/65d1/th/pre/f/2011/264/6/1/circular_rarity_avatar_by_virenth-d4ahols.png" alt="bot_image">
        </div>
        
          <div class="text">
            Hello How are you!!!
          </div>
       
      </div>
    </div>
    <div class="row">
      <div class="myuser">
        <div class="image">
          <img src="https://t00.deviantart.net/aLmB1AZYhqpf6HfyMlw3kb6KsGg=/300x200/filters:fixed_height(100,100):origin()/pre00/65d1/th/pre/f/2011/264/6/1/circular_rarity_avatar_by_virenth-d4ahols.png" alt="">
        </div>
        <div class="text">
            Hi, I am fine how about you
        </div>
      </div>
    </div>
    <div class="row">
      <div class="myuser">
        <div class="image">
          <img src="https://t00.deviantart.net/aLmB1AZYhqpf6HfyMlw3kb6KsGg=/300x200/filters:fixed_height(100,100):origin()/pre00/65d1/th/pre/f/2011/264/6/1/circular_rarity_avatar_by_virenth-d4ahols.png" alt="">
        </div>
        <div class="text">
            Hi, I am fine how about you
        </div>
      </div>
    </div>
    </div>
    <div class="editor">
        <textarea name="" id="" class="form-control" placeholder="Write your message here..." cols="30" rows="3"></textarea>
    </div>
    </div>
  </div>
</template>
<script>

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
        
      }
    },
  }

</script>
<style>
.box{
  /*height: 25px;*/
}
.messages{
  height: 500px;
  overflow-y: scroll;
  padding: 25px;
}
div.image > img {
  max-width: 50px;
}

div.myuser{
  min-width: 100%;
  /*padding: 2px;*/
}

div.myuser > div{
  float: right;
}

div.bot{
  min-width: 100%;
  /*padding: 20px;*/
}

div.bot > div {
  float: left;
}

div.text{
  background: #2ecc71;
  padding: 10px;
  border-radius: 5px;
  color: white;
  margin: 5px;
  font-size: 13px;
  max-width: 50%;
}

div.editor > textarea {
  font-size: 15px;
}

</style>
