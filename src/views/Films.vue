<template>
 <div class="home">
   <div class="container">
   <img id="portada" src="../assets/img/jedi-and-sith-star-wars.jpg">
   <button class="btn1">Button</button>
   <button class="btn2">Button</button>
   </div>
   
  <div class="jumbotron contenedor mx-auto row" v-for="(film, index) in films" :key="index">
    
     <div class="mx-auto flexbox-container3 " >
      <h1 class="display-4"> Episode: {{film.episode_id}} <br> {{film.title}}  </h1>
     </div>

     <div class="mx-auto flexbox-container4" >
     <p class="lead"> {{film.opening_crawl}} </p> <br>
     <p>Director: {{film.director}}  Producer: {{film.producer}}</p><br>
     <h6> Release: {{film.release_date}} </h6> 
      <img v-bind:src="'/img/'+film.title.split(' ').join('_').toLowerCase()+'.jpg'" v-bind:alt="film.title" width="80%" height="auto">
     </div>
     
     <hr class="my-4">
     
     <div class="mx-auto flexbox-container5">
     <h4>Characters</h4>
     <div class="row">
     <ul class="barras">
       
     <test :url="url" v-for="url in film.characters" :key="url"></test>
     
     </ul>     
     </div>    
     </div>

  </div>




 </div>
</template>

<script>
import axios from "axios";
import Test from "../components/Test.vue";
export default {
  name: "Home",
  components: {
    test: Test
  },
  mounted() {
    this.getFilms();
  },
  data() {
    return {
      films: []
    };
  },
  methods: {
    getFilms() {
      axios
        .get("https://swapi.co/api/films")
        .then(res => {
          console.log(res);
          this.films = res.data.results;
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