<template>
  <header class="header">
    <a class="logo__link" href="/">{{ $static.metadata.siteName }}</a>
    <nav class="nav">
      <a class="nav__link" href="/#projects">Projects</a>
      <a class="nav__link" href="/#contact-me">Contact</a>
      <a class="nav__link" @click="$emit('nextColorscheme')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="1"></circle>
        </svg>
      </a>
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
  background-color: var(--background);
  height: 6.5em;
  padding: 0 15% 0 15%;
}
a,
a:visited {
  text-decoration: none;
  color: var(--green-color);
}
a:hover {
  text-decoration: underline;
  color: var(--green-color);
  cursor: pointer;
}
.nav__link {
  margin-left: 40px;
}
.logo__link {
  font-size: 25px;
}
@media (max-width: 511px) {
  .nav__link {
    display: none;
  }
}
</style>
