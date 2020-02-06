
<template>
  <div class="card">
    <h2>{{element.name || element.title}}</h2>
    <div class="generaldata">
      <h4>Films</h4>
      <ol>
        <li v-for="(film,index) in element.films" :key="index">
          <a :href="film">{{film}}</a>
        </li>
      </ol>
    </div>
    <div class="planetdata" v-if="element.orbital_period">
      <ul>
        <li><strong>Orbital period:</strong> {{element.orbital_period}}</li>
        <li><strong>Rotation period:</strong> {{element.rotation_period}}</li>
        <li><strong>Terrain:</strong> {{element.terrain}}</li>
      </ul>
    </div>
    <div class="film-data" v-if="element.director">
      <ul>
        <li><strong>Director:</strong> {{element.director}}</li>
        <li><strong>Episode ID:</strong> {{element.episode_id}}</li>
        <li><strong>Opening Crawl:</strong> {{element.opening_crawl}}</li>
      </ul>
    </div>
  <div class="character-section" v-if="element.birth_year">
    <ul>
      <li><strong>Gender:</strong> {{element.gender | capitalize}}</li>
      <li><strong>Hair color:</strong> {{element.hair_color | capitalize}}</li>
      <li><strong>Height:</strong> {{element.height}}</li>
      <li><strong>Birth:</strong> {{element.birth_year}}</li>
      <li><strong>Eye color:</strong> {{element.eye_color | capitalize}}</li>
    </ul>
  </div>
    <a :href="element.url" class="btn">See More</a>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    element: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .card {
    margin: 8px auto;
    box-sizing: border-box;
    border: 1px solid #333;
    border-radius: 8px 8px 0 0px;
    border-bottom: none;
  }
  .card ul,.card ol {
    text-align: left;
  }
  .btn {
    padding: 8px 16px;
    background: #4b830d;
    color: #FFF;
    display: block;
    text-decoration: none;
    transition: all ease-in-out .3s 0s;
  }
  .btn:hover {
    background: #7cb342;
  }
</style>