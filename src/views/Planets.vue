<template>
 <div class="Planets">
   <div class="container">
   <img id="portada" src="../assets/img/jedi-and-sith-star-wars.jpg">
   <button class="btn1">Button</button>
   <button class="btn2">Button</button>
   </div>

   
  <div class="row">
    
  <div class="card mx-auto"  v-for="(planet, index) in planets" :key="index">
  <div class="card-body">
    <h5 class="card-title">Planet: {{planet.name}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Diameter: {{planet.diameter}}</h6>
    <p class="card-text"> Climate: {{planet.climate}} <br> Terrain: {{planet.terrain}}  <br> Surface Water: {{planet.surface_water}} <br>
     Population: {{planet.population}} </p>
  </div>
</div>

</div>
<div class="row">
  <div class="col-4 mx-auto"> 
    <button type="button" class="btn btn-light" Eve>Previous</button>
  </div>
  <div class="col-4 mx-auto"><h1 style="color:white">HOLA</h1></div>
  <div class="col-4 mx-auto">
     <button type="button" class="btn btn-dark">Next</button>
   </div>
</div>
   
   
 </div>
</template>

<script>
import axios from "axios";
import Species from "../components/Species.vue";
export default {
 name: "Planets",
 components:{
   species: Species
 },
 mounted() {
   this.getPlanets();
   this.getPlanets2();
   this.next();
   this.previous();
 },
 data() {
   return {
     planets1: [],
     planets2: [],
     planets: [], 
     next: "",
     previous: "",

 };
 },
 methods: {
   getPlanets() {
     axios
       .get("https://swapi.co/api/planets/?page=1")
       .then(res => {
         console.log(res);
         this.planets = res.data.results;
         this.next = res.data.next;
         this.previous = res.data.previous;
       })
       .catch(err => {
         console.log(err);
       });
   },
   next(ruta){
     axios
       .get(ruta)
       .then(res => {
         console.log(res);
         this.planets = res.data.results;
         this.next = res.data.next;
         this.previous = res.data.previous;
       })
       .catch(err => {
         console.log(err);
       });
   },
   previous(ruta){
     axios
       .get(ruta)
       .then(res => {
         console.log(res);
         this.planets = res.data.results;
         this.next = res.data.next;
         this.previous = res.data.previous;
       })
       .catch(err => {
         console.log(err);
       });
   },
   getPlanets2() {
     axios
       .get("https://swapi.co/api/planets/?page=1")
       .then(res => {
         console.log(res);
         this.planets = res.data.results;
         
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