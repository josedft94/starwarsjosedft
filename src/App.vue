<template>
  <div id="app">
    <div id="nav" class="row">
      <div class="col-3">
      <router-link to="/">Home</router-link> |
      </div>
      <div class="col-9">
      <router-link to="/films">Films</router-link>
      <router-link to="/characters">Characters</router-link>
      <router-link to="/planets">Planets</router-link>
      <router-link to="/vehicles">Vehicles</router-link>
      <router-link to="/starships">Starships</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  background-color: black;
  

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  
  
}

#nav a.router-link-exact-active {
  color: #ff0404;
}

#portada{
  width: 100%;
  height: auto;

}
body {
  background-color: black;
  margin: center;
}
.contenedor{
  width: 90%;
  max-width: 1200px;
  margin:0 auto;
  overflow: hidden;

}
.ajuste{
  width: device-width;
   height: device-height;
  /*height: auto;*/
  font-size: auto;
}
.jumbotron {
    margin: 1%;
    position: relative;
    width: auto;
    height: auto;
    background-position: 0% 25%;
    background-size: contain;
    background-repeat: no-repeat;
    color: gray;
}
.barras{
  -moz-column-count: 2;
-moz-column-gap: undefinedpx;
-webkit-column-count: 2;
-webkit-column-gap: undefinedpx;
column-count: 2;
column-gap: undefinedpx;
}
.flexbox-container {
  display: inline-block;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  box-sizing: border-box;
  width: 30%;
  padding: 5px;
}
.flexbox-container2 {
  display: inline-block;
  position: relative;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  box-sizing: border-box;
  width: 70%;
  padding: 5px;
}
.flexbox-container3 {
  display: inline-block;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  box-sizing: border-box;
  width: 30%;
  padding: 5px;
}
.flexbox-container4 {
  display: inline-block;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  box-sizing: border-box;
  width: 40%;
}
.flexbox-container5 {
  display: inline-block;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  box-sizing: border-box;
  width: 30%;
  padding: 5px;
}
.flexbox-container6 {
  display: inline-block;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  box-sizing: border-box;
  width: 30%;
  padding: 5px;
}
.flexbox-container7 {
  display: inline-block;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  box-sizing: border-box;
  width: 30%;
  padding: 5px;
}
.card{
  margin: 1%;
  position: relative;
  width: 250px;
  height: auto;
}
.center{
  text-align:center;
}
 .btn1 {
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.0);
    color: black;
    font-size: 16px;
    padding: 10% 25%;
    border: none;
    cursor: pointer;
    text-align: center;
}
 .btn2 {
    position: absolute;
    top: 50%;
    left: 80%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: rgba(0,0,0,0.0);
    color: black;
    font-size: 16px;
    padding: 10% 25%;
    border: none;
    cursor: pointer;
    text-align: center;
}
.container {
    position: relative;
}
@media screen and (max-width: 1000px){
  .flexbox-container{
    width: 100%;
  }
  .flexbox-container2{
    width: 100%;
  }
  .flexbox-container3{
    width: 30%;
  }
  .flexbox-container4{
    width: 70%;
  }
  .flexbox-container5{
    width: 100%;
  }
  .barras{
    width: 100%;
  }
  
}
@media screen and (max-width: 950px){
  .flexbox-container3{
    width: 100%;
  }
  .flexbox-container4{
    width: 100%;
  }
  .flexbox-container6{
    width: 50%;
  }
  .flexbox-container7{
    width: 50%;
  }
}
@media screen and (max-width: 485px){
  .flexbox-container6{
    width: 100%;
  }
  .flexbox-container7{
    width: 100%;
  }
}
</style>
