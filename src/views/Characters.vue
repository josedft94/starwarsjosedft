<template>
  <div class="home">
    <div class="container">
    <img id="portada" src="../assets/img/jedi-and-sith-star-wars.jpg">
    <button class="btn1">Button</button>
    <button class="btn2">Button</button>
    </div>
    <div class="jumbotron contenedor mx-auto row" v-for="(person, index) in people" :key="index">
      <div class="mx-auto flexbox-container4">
      <img v-bind:src="'/img/'+person.name.split(' ').join('_').toLowerCase()+'.jpg'" v-bind:alt="person.name" width="80%" height="auto">
      </div>
      <div class="mx-auto flexbox-container6">
      <h3>{{person.name}} <br> </h3>
      <b>
      <specie :url="url" v-for="url in person.species" :key="url"></specie>
      </b>
      <p class="lead"><planets :link="person.homeworld" :key="link"></planets> </p>
      </div>
      <div class="mx-auto flexbox-container7">
      <h5>Films:</h5> <p> <film :link="link" v-for="link in person.films" :key="link"></film> </p>
      </div>
</div>
  <pagination :ruta="ruta" :count="characters.count" :next="characters.next" :previous="characters.previous" />
  </div>
</template>

<script>
import axios from "axios";
import Planets from "../components/Planets.vue";
import Films from "../components/Films.vue";
import Species from "../components/Species.vue"
import Pagination from "../components/Pagination.vue"
export default {
  name: "Characters",
  components: {
    'pagination': Pagination,
    planets: Planets,
    film: Films,
    specie: Species
  },
  mounted() {
    this.getPeople();
    this.getResponse(this.ruta);
  },
  data() {
    return {
      people: [],
       characters: [],
       ruta: 'https://swapi.co/api/people',
       page: 1,
    };
  },
  methods: {
      getPeople() {
      axios
        .get(this.ruta+'/?page='+this.page)
        .then(res => {
          console.log(res);
          this.people = res.data.results;   
        })
        .catch(err => {
          console.log(err);
        });
    },
   getResponse: function (url) {
          //console.log(url)
          axios.get(url)
            .then((res) => {
                this.characters = res.data
            })
            .catch((err) => {
                console.log(err)
            })
      }
  }
}
</script>

<style scoped>

</style>
