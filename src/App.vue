<template>
  <div id="app">
    <header>
      <span>Handling Ajax Request with Axios in Vue</span>
    </header>
    <main>
        <h2>Click the button to get Random jokes</h2>
        <button id="btn" class="" v-on:click="getJokes">Get Jokes</button>

        <div v-if="loading">
          <img src="../src/assets/loader.gif"/>
          Loading.....
        </div>

      <div class="wrapper">
        <div class="row">
          <div v-for="joke in jokes" :key="joke.id">
          <div class="col-md-4 cards">
             <img src="https://placeimg.com/300/300/nature" class="img-responsive" alt="Random images placeholder"> 
            <div>
              <h3>{{ joke.id }}</h3>
              <p>{{ joke.joke }}</p>
              <p>{{ joke.category }}</p>
            </div>
          </div>
        </div>
        </div>
        
      </div>
    </main>
  </div>
</template>

<script>
  //import axios from 'axios';
  import {API} from './axios'

export default {
  name: 'app',
  data () {
    return {
      jokes: [],
      loading: false
    }
  }, 
  methods: {
    getJokes: function () {
      this.loading = true;
      API.get(`jokes`)
      .then((response)  =>  {
        this.loading = false;
        this.jokes = response.data.value;
      }, (error)  =>  {
        console.log(error);
        this.loading = false;
      })
    }
  },
}
</script>

<style>
  body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}


button {
  background: #51B767;
  color: #ffffff;
  padding: 15px;
  border-radius: 0;
  font-weight: bold;
  font-size: 15px;
  border: 0;
}

.cards {
  background: #F5F5F5;
  height:400px;
}
 .cards:hover {
  transform: translateY(-0.5em);
  background: #EBEBEB;
}


.cards {
   column-count: 1;
  column-gap: 1em;
    margin-top: 70px;

} 
</style>
