<template>
  <div id="grid">
    <h1 id="title"><a :href="link">{{ title }}</a></h1>
    <div id="description">
      <p>{{ description }}</p>
    </div>
    <div id="chips-bar">
      <div
        id="chips"
        v-for="_tech in techs"
        :key="_tech.tech + title"
        :style="'background-color:' + _tech.color"
      >
        {{ _tech.tech }}
      </div>
    </div>
    <div id="image">
      <g-image :src="setImage" ></g-image>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'description',
    'techs',
    'image',
    'link'
  ],
  computed: {
    setImage: function() {
      return require("~/assets/images/" + this.image);
    }
  }
}
</script>

<style lang="css" scoped>

a, a:visited {
  text-decoration: none;
  color: var(--green-color);
}
a:hover {
  text-decoration: underline;
  color: var(--green-color);
  cursor: pointer;
}
#title {
  grid-area: title;
  padding: 5% 0 0 5%;
  font-family: Roboto Slab;
}
#description {
  grid-area: description;
  padding: 10% 5%;
  font-family: Poppins;
  color: var(--foreground-alt);
}
#chips-bar {
  grid-area: chips;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0 0 5% 5%;
}
#chips {
  align-self: flex-end;
  background-color: grey;
  border-radius: 90px;
  height: max-content;
  padding: 0 1em 0 1em;
  margin: 0 1em 0.5em 0;
}
#image {
  grid-area: image;
  max-width: 350px;
  max-height: 350px;
  padding: 4%;
}
img {
  width: 100%;
  float: rihgt;
}
#grid {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.5); */
box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
}
@media screen and (min-width: 1024px) {
  #grid {
    display: grid;
    grid-template-areas: 
      "title image"
      "description image"
      "chips image";
    grid-template-rows: 2em auto auto;
    grid-template-columns: 30em 1fr;
    padding: 10px;
  }
  #grid:last-child {
    margin-bottom: 0;
  }
  #image {
    margin-left: auto;
  }
}
@media screen and (max-width: 600px) {
  #image {
    align-self: center;
  }
}
</style>