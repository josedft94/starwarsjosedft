<template>
 <div class="Starships">
   <div class="container">
   <img id="portada" src="../assets/img/jedi-and-sith-star-wars.jpg">
   <button class="btn1">Button</button>
   <button class="btn2">Button</button>
   </div>
   <h1 style="color:white">HOLA</h1>
   <div class="jumbotron  row" v-for="(starship, index) in starships" :key="index">
     <div class="col-3">
 <h1 class="display-4"> Starship: {{starship.name}} <br> {{starship.model}}  </h1>
     </div>
     <div class="col-9">
 <p class="lead"> {{starship.manufacturer}} </p>
     </div>
 <hr class="my-4">
 <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
 <p class="lead">
   <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
 </p>
</div>
   
 </div>
</template>

<script>
import axios from "axios";
export default {
 name: "starshipss",
 mounted() {
   this.getStarships();
 },
 data() {
   return {
     starships: []
   };
 },
 methods: {
   getStarships() {
     axios
       .get("https://swapi.co/api/starships")
       .then(res => {
         console.log(res);
         this.starships = res.data.results;
       })
       .catch(err => {
         console.log(err);
       });
   }
 }
};
</script>

<style scoped>

</style>