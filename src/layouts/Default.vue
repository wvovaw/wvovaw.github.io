<template>
  <div class="layout">
    <div class="content">
      <Navbar />
      <Title />
      <Projects />
      <Contact />
    </div> 
    <Footer class="footer" />
  </div>
</template>

<script>
import Navbar from "./Navbar"
import Title from "./Title"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"

export default {
  components: {
    Navbar,
    Title,
    Projects,
    Contact,
    Footer,
},
}
</script>

<style lang="scss">
html { height: 100%; }
body {
  height: 100%;
  margin:0;
  padding:0;
  line-height: 1.5;
  font-family: Poppins;
  overflow-y: visible;
}

::-webkit-scrollbar {
  display: none;
}

</style>
