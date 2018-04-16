<template>
  
      <p>
          {{personaje.name}}
      </p>
  
</template>
<script>
import axios from 'axios'
export default {
  name: 'Test',
  props: [
      'url'
  ],
  mounted(){
      this.getPersonaje()
  },
  data: function(){
      return{
          personaje: {}
      }
  },
  methods: {
      getPersonaje(){
          axios.get(this.url)
          .then((res)=> {
              this.personaje = res.data
              console.log(res.data.name)
          })
          .catch((err)=>{
              console.log(err)
          })
      }
  }

}
</script>
