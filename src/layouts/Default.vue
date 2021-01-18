<template>
  <div class="layout">
    <header class="header">
        <g-link class="logo__link" to="/">{{ $static.metadata.siteName }}</g-link>
      <nav class="nav">
        <g-link class="nav__link" to="/#projects">Projects</g-link>
        <g-link class="nav__link" to="/#contact">Contact</g-link>
      </nav>
    </header>
    <About />
    <Contacts />
  </div>
</template>

<script>
import About from "./About"
import Contacts from "./Contacts"
export default {
  components: {
    About,
    Contacts
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: Poppins;
  margin:0;
  padding:0;
  line-height: 1.5;
  background-color: #073642;
}

.layout {
  margin: 0 auto;
}

.header {
  font-family: Roboto Slab;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: #002b36;
  padding: 0 200px 0 200px;
}

a, a:active, a:visited {
  text-decoration: none;
  color: #2aa198;
}
a.active--exact.active {
  color: #859900;
}

.nav__link {
  margin-left: 40px;
}
.logo__link {
  font-size: 25px;
}

.section {
  border: 1px solid black;
}
</style>
