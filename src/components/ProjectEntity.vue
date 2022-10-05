<template>
  <article class="project">
    <h1 class="project__title">
      <a :href="link" class="project__link">{{ title }}</a>
    </h1>
    <p class="project__description">
      {{ description }}
    </p>
    <div class="project__chips chips">
      <div class="chips__chip" v-for="_tech in techs" :key="_tech.tech + title"
        :style="'background-color:' + _tech.color">
        {{ _tech.tech }}
      </div>
    </div>
    <div class="project__image">
      <g-image :src="setImage" />
    </div>
  </article>
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
.project {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2% 5%;
  border: 5px solid var(--aqua-color);
  border-radius: 6px;

  &:hover {
    border-color: var(--purple-color);
  }

  &__link {

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

  &__title {
    margin-block-end: 0;
    grid-area: title;
    font-family: Roboto Slab;
    font-size: 1.4rem;
  }

  &__description {
    grid-area: description;
    font-family: Poppins;
    color: var(--foreground-alt);
  }

  .chips {
    grid-area: chips;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    font-size: 0.8rem;

    &__chip {
      height: max-content;
      padding: 0 3%;
      margin: 0 1em 1em 0;
      border-radius: 20px;
      background-color: grey;
    }
  }

  &__image {
    grid-area: image;
    max-width: 350px;
    max-height: 350px;
    align-self: center;

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
    grid-template-columns: 1fr auto;

    &__description {
      margin-inline-end: 1rem;
    }
  }

  &__image {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media screen and (max-width: 768px) {
  .project {
    display: grid;
    padding: 5%;
    grid-template-areas:
      "title"
      "description"
      "chips"
      "image";
    grid-template-rows: auto auto auto auto;

    &__image {
      align-self: center;
    }
  }
}
</style>
