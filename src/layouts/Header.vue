<template>
    <header class="header">
        <a class="logo__link" href="/">{{ $static.metadata.siteName }}</a>
      <nav class="nav">
        <a class="nav__link" href="/#projects">Projects</a>
        <a class="nav__link" href="/#contact-me">Contact</a>
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
  background-color: #002b36;
  height: 6.5em;
  padding: 0 15% 0 15%;
}
a, a:visited {
  text-decoration: none;
  color: #859900;
}
a:hover {
    text-decoration: underline;
    color: #859900;
    cursor: pointer;
}

.nav__link {
  margin-left: 40px;
}
.logo__link {
  font-size: 25px;
}
@media (max-width: 320px) {
  .nav__link {
    display: none;
  }
}
</style>