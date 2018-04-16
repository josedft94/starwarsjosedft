<template>
 <div class="Starships">
   <div class="container">
   <img id="portada" src="../assets/img/jedi-and-sith-star-wars.jpg">
   <button class="btn1">Button</button>
   <button class="btn2">Button</button>
   </div>

   
  <div class="row">
    
  <div class="card mx-auto"  v-for="(starship, index) in starships" :key="index">
  <div class="card-body">
    <h5 class="card-title">Starship: {{starship.name}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Model: {{starship.model}}</h6>
    <p class="card-text"> Manucfacturer: {{starship.manufacturer}} <br> Crew: {{starship.crew}} <br> Passengers: {{starship.passengers}} </p>
  </div>
</div>

</div>
<div class="row">
  <div class="col-4 mx-auto"> 
    <button type="button" @click="previous()" class="btn btn-light">Previous</button>
  </div>
  <div class="col-4 mx-auto"><h1 style="color:white">05/04</h1></div>
  <div class="col-4 mx-auto">
     <button type="button" @click="next()" class="btn btn-dark">Next</button>
   </div>
</div> 
<div>
  <h6 class="mt-4">With link generator function</h6>
  <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" v-model="currentPage" />
  <br>

  <div class="mt-4">currentPage: {{currentPage}}</div>
</div>
 </div>
</template>

<script>
import axios from "axios";
export default {
 name: "starships",
 mounted() {
   this.getStarships();
   this.getStarships2();
   this.next();
   this.previous();
 },
 data() {
   return {
     starships1: [],
     starships2: [],
     starships: [],
     next: "",
    previous: "",
    ruta:"https://swapi.co/api/starships/?page=",
    page: 1,
    currentPage:1
     //starships1.concat(starships2)
   };
 },
 methods: {
   getStarships() {
     axios
       .get("https://swapi.co/api/starships/?page="+this.page)
       .then(res => {
         console.log(res);
         this.starships = res.data.results;
         this.next = res.data.next;
         this.previous = res.data.previous;
       })
       .catch(err => {
         console.log(err);
       });
   },
   linkGen (pageNum) {
      return 'https://swapi.co/api/starships/?page=' + pageNum
    },
    next: function(){
      axios
        .get(next)
        .then (res => {
          console.log(res);
          this.starships=res.data.results;
        })
        .catch(err=> {
          console.log(err);
        })
    this.page = page+1;
    console.log(page)
   },
   previous: function(){
      axios
        .get(previous)
        .then (res => {
          console.log(res);
          this.starships=res.data.results;
        })
        .catch(err=> {
          console.log(err);
        })
    this.page = page- 1;
    console.log(page)
   },
   getStarships2() {
     axios
       .get("https://swapi.co/api/starships/?page=2")
       .then(res => {
         console.log(res);
         this.starships2 = res.data.results;
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