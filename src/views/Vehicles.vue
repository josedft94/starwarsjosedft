<template>
 <div class="Starships">
   <div class="container">
   <img id="portada" src="../assets/img/jedi-and-sith-star-wars.jpg">
   <button class="btn1">Button</button>
   <button class="btn2">Button</button>
   </div>

   
  <div class="row">
    
  <div class="card mx-auto"  v-for="(vehicle, index) in vehicles" :key="index">
  <div class="card-body">
    <h5 class="card-title">Starship: {{vehicle.name}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Model: {{vehicle.model}}</h6>
    <p class="card-text"> Class: {{vehicle.vehicle_class}} <br> Length: {{vehicle.length}}  <br> Crew: {{vehicle.crew}} <br> Passengers: {{vehicle.passengers}} </p>
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
export default {
 name: "starships",
 mounted() {
   this.getVehicles();
   this.getVehicles2();
   this.next();
   this.previous();
 },
 data() {
   return {
     vehicles1: [],
     vehicles2: [],
     vehicles: [], 
     next: "",
    previous: "",

     //starships1.concat(starships2)
   };
 },
 methods: {
   getVehicles() {
     axios
       .get("https://swapi.co/api/vehicles/?page=1")
       .then(res => {
         console.log(res);
         this.vehicles = res.data.results;
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
         this.vehicles = res.data.results;
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
         this.vehicles = res.data.results;
         this.next = res.data.next;
         this.previous = res.data.previous;
       })
       .catch(err => {
         console.log(err);
       });
   },
   getVehicles2() {
     axios
       .get("https://swapi.co/api/vehicles/?page=2")
       .then(res => {
         console.log(res);
         this.vehicles = res.data.results;
         
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