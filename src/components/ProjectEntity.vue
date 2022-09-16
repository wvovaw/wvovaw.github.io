<template>
  <div class="project">
    <h1 class="project__title">
      <a :href="link">{{ title }}</a>
    </h1>
    <p class="project__description">
      {{ description }}
    </p>
    <div class="project__chips chips">
      <div
        class="chips__chip"
        v-for="_tech in techs"
        :key="_tech.tech + title"
        :style="'background-color:' + _tech.color"
      >
        {{ _tech.tech }}
      </div>
    </div>
    <div class="project__image">
      <g-image :src="setImage" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "techs", "image", "link"],
  computed: {
    setImage: function () {
      return require("~/assets/images/" + this.image);
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  &,
  &:visited {
    text-decoration: none;
    color: var(--green-color);
  }
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}
.project {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 5px solid var(--aqua-color);
  border-radius: 3px;
  &:hover {
    border-color: var(--purple-color);
  }

  .project__title {
    grid-area: title;
    padding: 5% 0 0 5%;
    font-family: Roboto Slab;
  }
  .project__description {
    grid-area: description;
    padding: 5% 5%;
    margin-top: 5%;
    font-family: Poppins;
    color: var(--foreground-alt);
  }
  .project__chips {
    grid-area: chips;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    font-size: 0.8em;
    padding-left: 5%;

    .chips__chip {
      align-self: flex-start;
      background-color: grey;
      border-radius: 20px;
      height: max-content;
      padding: 0 3%;
      margin: 1em 1em 0 0;
    }
  }
  .project__image {
    grid-area: image;
    max-width: 350px;
    max-height: 350px;
    padding: 5%;
    img {
      width: 100%;
      float: rihgt;
    }
  }
}
@media screen and (min-width: 1024px) {
  .project {
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
  .project__image {
    display: flex;
    align-items: center;
    margin-left: auto;
    justify-content: center;
  }
}
@media screen and (max-width: 600px) {
  .project__image {
    align-self: center;
  }
  .project {
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