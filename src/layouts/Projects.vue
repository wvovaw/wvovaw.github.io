<template>
    <div class="projects">
      <h1 class="projects__header">My projects</h1>
      <ProjectEntity v-for="edge in $static.projects.edges" :key="edge.node.id"
        class="project__entity"
        :title="edge.node.title"
        :description="edge.node.description"
        :techs="edge.node.techs"
        :image="edge.node.image"
        :link="edge.node.link"
      />
    </div>
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
        }
        image
        link
      }
    }
  }
}
</static-query>

<script>
import ProjectEntity from '../components/ProjectEntity'
export default {
  components: {
    ProjectEntity
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-family: Roboto Slab;
  color: var(--foreground);
  padding: 20px 0 20px;
}
.project__entity {
  background-color: var(--background);
  margin-bottom: 8%;
}
.projects {
  background-color: var(--background-alt);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 5% 0% 5%;

  @media (min-width: 600px) {
    padding: 0 15% 5% 15%
  }
}
</style>