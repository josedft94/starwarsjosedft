<template>
  <p> From: {{planet.name}} </p>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Planets',
    props: [
        'link'
    ],
    mounted(){
        this.getPlanets()
    },
    data:
    function(){
        return{
            planet:{}
        }
    },
    methods:{
        getPlanets(){
            axios.get(this.link)
                .then((res)=>{
                    this.planet = res.data
                })
                .catch((err)=>{
                    console.log(err)
                })
        }
    }
  
}
</script>
