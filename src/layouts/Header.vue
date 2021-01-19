<template>
    <header class="header">
        <g-link class="logo__link" to="/">{{ $static.metadata.siteName }}</g-link>
      <nav class="nav">
        <g-link class="nav__link" to="/#about">About</g-link>
        <a class="nav__link" href="/#projects">Projects</a>
        <g-link class="nav__link" to="/#contact">Contact</g-link>
      </nav>
    </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>

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
  color: #cb4b16;
}

.nav__link {
  margin-left: 40px;
}
.logo__link {
  font-size: 25px;
}
</style>