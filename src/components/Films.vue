<template>
  <p>Ep:{{film.episode_id}}. {{film.title}}</p>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Film',
  props:[
    'link'
  ],
  mounted(){
    this.getFilm()
  },
  data:
  function(){
    return{
      film:{}
    }
  },
  methods:{
    getFilm(){
      axios.get(this.link)
        .then((res)=> {
          this.film = res.data
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  }

}
</script>

<style>

</style>

