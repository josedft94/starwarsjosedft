<template>
  <div class="container">
      <div class="row">
          <div class="col-md-12">
              <ul>
                  <li v-for="character in characters.results" :key="character.name">{{ character.name }}</li>
              </ul>
          </div>
          <div class="row">
            <pagination :ruta="ruta" :count="characters.count" :next="characters.next" :previous="characters.previous" />
          </div>
      </div>
  </div>
</template>
<script>
import axios from 'axios'
import Pagination from '../components/Pagination'
export default {
  name: 'People',
  components: {
      'pagination': Pagination
  },
  mounted: function(){
      this.getResponse(this.ruta)
  },
  data: function(){
      return {
          characters: [],
          ruta: 'https://swapi.co/api/people',
          page: 1,
      }
  },
  methods: {
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
