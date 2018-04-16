<template>
  
      <p>
          Specie: {{species.name}} <br>
          Classification: {{species.classification}} <br>
          Language: {{species.language}}
      </p>
  
</template>
<script>
import axios from 'axios'
export default {
  name: 'Species',
  props: [
      'url'
  ],
  mounted(){
      this.getSpecies()
  },
  data: function(){
      return{
          species: {}
      }
  },
  methods: {
      getSpecies(){
          axios.get(this.url)
          .then((res)=> {
              this.species = res.data
              console.log(res.data.name)
          })
          .catch((err)=>{
              console.log(err)
          })
      }
  }

}
</script>
