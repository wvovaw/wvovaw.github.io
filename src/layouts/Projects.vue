<template>
  <div class="about section">
    <div class="flexbox">
      <ProjectEntity class="entity"
        title="Title 1"
        description="Lorem Ipsum blablabla daddadada ahahah"
        image="avatar.jpg"
      />
      <ProjectEntity class="entity"
        title="Title 2"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum molestias velit quaerat qui ea laudantium eveniet, amet suscipit neque veniam?
"
        image="avatar.jpg"
      />
      <ProjectEntity class="entity"
        title="Title 3"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, fugit!"
        image="avatar.jpg"
      />
    </div>
  </div>
    </template>
<script>
export default {
}
</script>

<style scoped>
.about {
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