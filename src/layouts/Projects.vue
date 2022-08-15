<template>
  <div id="projects">
    <div id="flexbox">
      <h1 id="projects">My projects</h1>
      <ProjectEntity v-for="edge in $static.projects.edges" :key="edge.node.id"
        class="entity"
        :title="edge.node.title"
        :description="edge.node.description"
        :techs="edge.node.techs"
        :image="edge.node.image"
        :link="edge.node.link"
      />
    </div>
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
#projects {
  width: 100%;
  background-color: var(--background-alt);
}
.entity {
  background-color: var(--background);
  margin-bottom: 8%;
}
#flexbox {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 5% 0% 5%;

  @media (min-width: 600px) {
    padding: 0 15% 5% 15%
  }
}
</style>