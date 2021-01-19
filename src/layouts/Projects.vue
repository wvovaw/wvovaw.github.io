<template>
  <div class="projects">
    <div class="flexbox">
      <ProjectEntity v-for="edge in $static.projects.edges" :key="edge.node.id"
        class="entity"
        :title="edge.node.title"
        :description="edge.node.description"
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
        image
        link
      }
    }
  }
}
</static-query>

<script>
export default {
}
</script>

<style scoped>
.projects {
    width: 100%;
    background-color: #073642;
}
.entity {
  background-color: #002b36;
  margin: 20px 0 20px 0;
}
.flexbox {
  padding: 0 200px 50px 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>

<script>
import ProjectEntity from '../components/ProjectEntity'
export default {
  components: {
    ProjectEntity
  }
}
</script>