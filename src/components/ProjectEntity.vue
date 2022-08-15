<template>
  <div id="grid">
    <h1 id="title"><a :href="link">{{ title }}</a></h1>
    <p id="description">
      {{ description }}
    </p>
    <div id="chips-bar">
      <div
        id="chips"
        v-for="_tech in techs"
        :key="_tech.tech + title"
        :style="'background-color:' + _tech.color"
      >{{ _tech.tech }}
      </div>
    </div>
    <div id="image">
      <g-image :src="setImage" />
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

<style lang="scss" scoped>
a {
  &, &:visited {
    text-decoration: none;
    color: var(--green-color);
  }
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}
#title {
  grid-area: title;
  padding: 5% 0 0 5%;
  font-family: Roboto Slab;
}
#description {
  grid-area: description;
  padding: 5% 5%;
  margin-top: 5%;
  font-family: Poppins;
  color: var(--foreground-alt);
}
#chips-bar {
  grid-area: chips;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  padding-left: 5%;

  #chips {
    align-self: flex-start;
    background-color: grey;
    border-radius: 20px;
    height: max-content;
    padding: 0 5%;
    margin: 1em 1em 0 0;
  }
}
#image {
  grid-area: image;
  max-width: 350px;
  max-height: 350px;
  padding: 5%;
  img {
    width: 100%;
    float: rihgt;
  }
}
#grid {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 5px solid var(--aqua-color);
  border-radius: 3px;
  &:hover {
    border-color: var(--purple-color);
  }
}
@media screen and (min-width: 1024px) {
  #grid {
    display: grid;
    grid-template-areas: 
      "title image"
      "description image"
      "chips image";
    grid-template-rows: 6em auto 6em;
    grid-template-columns: 30em 1fr;

    :last-child {
      margin-bottom: 0;
    }
  }
  #image {
    margin-left: auto;
  }
}
@media screen and (max-width: 600px) {
  #image {
    align-self: center;
  }
  #grid {
    display: grid;
    grid-template-areas: 
      "title"
      "description"
      "chips"
      "image";
    grid-template-rows: 6em auto 5em auto;

    :last-child {
      margin-bottom: 0;
    }
  }
}
</style>