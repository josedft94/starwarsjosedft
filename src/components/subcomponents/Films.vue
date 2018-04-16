<template>
  <div class="container">
      <div class="row">
          <div class="col-md-12">
              <ul>
                  <li v-for="film in films.results" :key="film.episode_id">{{ film.title }}</li>
              </ul>
          </div>
          <div class="row">
            <pagination :ruta="ruta" :count="films.count" :next="films.next" :previous="films.previous" />
          </div>
      </div>
  </div>
</template>
<script>
import axios from 'axios'
import Pagination from '../components/Pagination'
export default {
  name: 'Fims',
  components: {
      'pagination': Pagination
  },
  mounted: function(){
      this.getResponse(this.ruta)
  },
  data: function(){
      return {
          films: [],
          ruta: 'https://swapi.co/api/films',
          page: 1,
      }
  },
  methods: {
      getResponse: function (url) {
          //console.log(url)
          axios.get(url)
            .then((res) => {
                this.films = res.data
            })
            .catch((err) => {
                console.log(err)
            })
      }
  }
}
</script>
