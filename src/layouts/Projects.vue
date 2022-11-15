<template>
  <section class="projects" id="projects">
    <h1 class="projects__header">My projects</h1>
    <ProjectEntity
      v-for="edge in $static.projects.edges"
      :key="edge.node.id"
      class="projects__entity"
      :title="edge.node.title"
      :description="edge.node.description"
      :techs="edge.node.techs"
      :image="edge.node.image"
      :link="edge.node.link"
    />
  </section>
</template>

<static-query>
query {
  projects: allProject {
    edges {
      node {
        id
        title
        description
        techs {
          tech
          color
          icon
        }
        image
        link
      }
    }
  }
}
</static-query>

<script>
import ProjectEntity from "../components/ProjectEntity";
export default {
  components: {
    ProjectEntity,
  },
};
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 15%;
  background-color: var(--background-alt);

  &__header {
    padding: 0;
    color: var(--foreground);
    font-size: 1.6rem;
    font-family: Roboto Slab;
  }

  &__entity {
    margin-bottom: 2rem;
    background-color: var(--background);
  }

  @media (max-width: 768px) {
    padding: 0 5%;
    font-size: 1rem;
  }
}
</style>
