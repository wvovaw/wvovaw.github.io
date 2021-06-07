<template>
  <div class="about">
      <div class="container">
      </div>
  </div>
</template>

<style scoped>

.container {
    padding: 0 200px 50px 200px;
}
.about {
    font-size: 2em;
    color: var(--gray-color);
    width: 100%;
    background-color: var(--background);
}
#caret {
  border-right: .05em solid;
  animation: caret 1s steps(1) infinite;
}

@keyframes caret {
  50% {
    border-color: transparent;
  }
}
</style>
